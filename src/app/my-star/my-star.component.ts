import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { FirebaseForQuestionnaire } from '../services/questionnaire.service';
import { AuthService } from '../services/auth.service';
import { MainStarComponent, IDataSet } from '../main-star/main-star.component';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-my-star',
  templateUrl: './my-star.component.html',
  styleUrls: ['./my-star.component.scss']
})
export class MyStarComponent implements OnInit, OnDestroy {
  @ViewChild(MainStarComponent) mainStarViewChild: MainStarComponent;

  questions;
  results;
  overallResult: number;
  datasets: IDataSet[] = [];
  labels: string [] = [];
  user;
  currentDate;
  starSubscription: Subscription;
  ready = false;

  constructor(
    private authService: AuthService,
    private firebase: FirebaseForQuestionnaire,
    private router: Router
   ) {
    this.user = this.authService.user;


    // console.log("results are", this.results)
    // const getAllResults = this.firebase.restructureDocsInCollection(this.results);

   }


   getResults() {
    this.firebase.getAllResults().subscribe((this.results));
  }

  restructureData(results) {
    const data: IDataSet = {
      data: [],
      label: 'My Star'
    };
    for (const result of results) {
      this.labels.push(result.categoryName);
      data.data.push(Math.round(result.categoryAverage * 100) / 100);
    }
    this.datasets.push(data);
  }

  ngOnDestroy() {
    this.starSubscription.unsubscribe();
  }

  ngOnInit() {

    this.starSubscription = this.firebase.getRecent(this.user, 1).subscribe((results) => {
      if (results.length > 0) {

      this.restructureData(results[0].categoryResults);
      // this.mainStarViewChild.starData[0].data = this.datasets[0].data;
      this.overallResult = results[0].overallResult;
      this.currentDate = results[0].date;
            this.ready = true;
            this.mainStarViewChild.redraw();
    } else {
      this.router.navigate(['/questionnaire']);
    }
  });
  }


}
