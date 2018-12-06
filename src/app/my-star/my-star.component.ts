import { Component, OnInit, ViewChild } from '@angular/core';
import {  QuestionnaireService,  UploadToFirebase, IResult } from '../services/questionnaire.service';
import { AuthService } from '../services/auth.service';
import { MainStarComponent, IDataSet } from '../main-star/main-star.component';
import {Router} from '@angular/router';


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
<<<<<<< HEAD
  welcomeHidden = false;
=======
  currentDate;
  ready = false;
>>>>>>> 64c616b69c5279e5afebe367d384830c734c7f69

  constructor(private questionnaireService: QuestionnaireService,
    private authService: AuthService,
    private firebase: UploadToFirebase,
    private router: Router
   ) {
    this.user = authService.user;


    // console.log("results are", this.results)
    // const getAllResults = this.firebase.restructureDocsInCollection(this.results);

<<<<<<< HEAD
   }
   toggleWelcome(){
     this.welcomeHidden =! this.welcomeHidden;
   }

=======


  }
>>>>>>> 64c616b69c5279e5afebe367d384830c734c7f69
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
      this.ready = true;
      this.restructureData(results[0].categoryResults);
      this.mainStarViewChild.starData[0].data = this.datasets[0].data;
      this.mainStarViewChild.redraw();
      this.overallResult = results[0].overallResult;
      console.log('HI', results[0]);
      this.currentDate = results[0].date;
    } else {
      this.router.navigate(['/questionnaire']);
    }
  });
  }

}
