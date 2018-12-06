import { Component, OnInit, ViewChild } from '@angular/core';
import {  QuestionnaireService,  UploadToFirebase, IResult } from '../services/questionnaire.service';
import { AuthService } from '../services/auth.service';
import { MainStarComponent, IDataSet } from '../main-star/main-star.component';


@Component({
  selector: 'app-my-star',
  templateUrl: './my-star.component.html',
  styleUrls: ['./my-star.component.scss']
})
export class MyStarComponent implements OnInit {
  @ViewChild(MainStarComponent) mainStarViewChild: MainStarComponent;

  questions;
  results;
  overallResult: number;
  datasets: IDataSet[] = [];
  labels: string [] = [];
  user;
  welcomeHidden = false;

  constructor(private questionnaireService: QuestionnaireService,
    private authService: AuthService,
    private firebase: UploadToFirebase) {
    this.user = authService.user;


    // console.log("results are", this.results)
    // const getAllResults = this.firebase.restructureDocsInCollection(this.results);

   }
   toggleWelcome(){
     this.welcomeHidden =! this.welcomeHidden;
   }

   getResults() {
    this.firebase.getAllResults().subscribe((this.results));
    console.log('Results:', this.getResults());
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

  ngOnInit() {

    this.firebase.getRecent(this.user, 1).subscribe((results) => {
      if (results.length > 0) {
      this.restructureData(results[0].categoryResults);
      this.mainStarViewChild.starData[0].data = this.datasets[0].data;
      this.mainStarViewChild.redraw();
      this.overallResult = results[0].overallResult;
    }
  });
  }

}
