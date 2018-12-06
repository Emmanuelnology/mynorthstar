import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MainStarComponent, IDataSet } from '../main-star/main-star.component';
import { UploadToFirebase } from '../services/questionnaire.service';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';

// import { renderDetachView } from '@angular/core/src/view/view_attach';
// import { viewAttached } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-compare-star',
  templateUrl: './compare-star.component.html',
  styleUrls: ['./compare-star.component.scss']
})

export class CompareStarComponent implements OnInit, AfterViewInit {

  @ViewChild(MainStarComponent) mainStarViewChild: MainStarComponent;

  currentData = {label: 'remove', data: []};
  emptyData = {label: 'remove', data: []};
  animation = 0;
  currentScore;
  user;
  results;
  currentDate;
  public pastData: IDataSet[];

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
    private firebase: UploadToFirebase) {
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
      this.data.labels.push(category.categoryName)
    }
  }

  ngOnInit() {

    this.firebase.getRecent(this.user, 6).subscribe((results) => {
      if (results.length > 0) {
        for (const index in results) {
          if (results.hasOwnProperty(index)) {
            this.restructureData(results[index].categoryResults , index);
            // this.intermediateData[index].label = results[index].date;  
            
            this.intermediateData[index].label = 'date';           
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
      } else {
        this.router.navigate(['/questionnaire']);
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
