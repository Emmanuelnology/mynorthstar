import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MainStarComponent, IDataSet } from '../main-star/main-star.component';
import { FirebaseForQuestionnaire } from '../services/questionnaire.service';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';

// import { renderDetachView } from '@angular/core/src/view/view_attach';
// import { viewAttached } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-compare-star',
  templateUrl: './compare-star.component.html',
  styleUrls: ['./compare-star.component.scss']
})

export class CompareStarComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(MainStarComponent) mainStarViewChild: MainStarComponent;

  currentData: IDataSet = {label: 'remove', data: []};
  emptyData: IDataSet = {label: 'remove', data: []};
  animation = 0;
  currentScore: number;
  user: firebase.User;
  currentDate;
  recentQuestionnaireSubscription: Subscription;
  public pastData: IDataSet[];
  ready = false;
  noHistory = false;
  data = {
    datasets: [],
    labels: []
  };

  public intermediateData: IDataSet[] = [
    {label: '', data: []},
    {label: '', data: []},
    {label: '', data: []},
    {label: '', data: []},
    {label: '', data: []},
    {label: '', data: []}
  ];

  constructor(
    private authService: AuthService,
    private router: Router,
    private firebase: FirebaseForQuestionnaire) {
    this.user = this.authService.user;
  }

  // getResults() {
  //   this.firebase.getAllResults().subscribe((this.results));
  //   console.log('Results:', this.getResults());
  // }

  restructureData(categoryResults, index) {
    for (const result of categoryResults) {
      this.intermediateData[index].data.push(Math.round(result.categoryAverage * 100) / 100);
    }
  }

  getLabels(results) {
    for (const category of results[0].categoryResults) {
      this.data.labels.push(category.categoryName);
    }
  }

  getShortYear(fullYear) {
    return fullYear.toString().substr(-2);
  }

  ngOnDestroy() {
    this.recentQuestionnaireSubscription.unsubscribe();
}

  ngOnInit() {

    this.recentQuestionnaireSubscription = this.firebase.getRecent(this.user, 6).subscribe((results) => {
      if (results.length === 0) {
        this.router.navigate(['/questionnaire']);
      } else if (results.length === 1) {
        this.ready = true;
        this.getLabels(results);
        this.restructureData(results[0].categoryResults, 0);
        this.currentData.data = this.intermediateData[0].data;
        this.data.datasets.push(this.currentData);
        this.redraw();
        this.noHistory = true;

      } else {
        this.ready = true;
        for (const index in results) {
          if (results.hasOwnProperty(index)) {
            this.restructureData(results[index].categoryResults , index);
            const date: Date = results[index].date.toDate();
            this.intermediateData[index].label = date.getDate() + '/' + date.getMonth() + '/' +  this.getShortYear(date.getFullYear());
          }
        }

        this.getLabels(results);
        this.currentData.data = this.intermediateData[0].data;
        this.pastData = [
          this.intermediateData[1],
          this.intermediateData[2],
          this.intermediateData[3],
          this.intermediateData[4],
          this.intermediateData[5]
        ];
        this.data.datasets.push(
          this.currentData
        );
        this.redraw();

      }
      this.currentDate = results[0].date;
      this.currentScore = results[0].overallResult;
      // this.intermediateData[index].label = results[index].date;
    });
  }

  ngAfterViewInit() {
  }

  redraw() {
    this.mainStarViewChild.redraw();
  }

  editData() {
    this.data.datasets = [
      this.currentData,
      this.emptyData,
      this.emptyData,
      this.emptyData,


      this.emptyData,
      this.emptyData
    ];
  }

  addRemoveData(activeIndex: number[]) {
    this.editData();
    if (activeIndex.length !== 0) {
      this.data.datasets[0].label = 'Current';
      for (const index of activeIndex) {
        this.data.datasets[index + 1] = this.pastData[index];
      }
    } else {
      this.data.datasets[0].label = 'remove';
      this.data.datasets.splice(1);
    }
    this.mainStarViewChild.starData = this.data.datasets;
    this.redraw();
  }
}
