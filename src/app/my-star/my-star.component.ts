import { Component, OnInit } from '@angular/core';
import { IResult, QuestionnaireService, exampleQuestions, UploadToFirebase } from '../services/questionnaire.service';
import { IDataSet } from '../main-star/main-star.component';
import { AuthService, IUser } from '../services/auth.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { identifierModuleUrl } from '@angular/compiler';


@Component({
  selector: 'app-my-star',
  templateUrl: './my-star.component.html',
  styleUrls: ['./my-star.component.scss']
})
export class MyStarComponent implements OnInit {
  questions = exampleQuestions;
  results;
  overallResult: number;
  datasets: IDataSet[] = [];
  labels: string [] = [];
  user;


  constructor(private questionnaireService: QuestionnaireService, 
    private authService: AuthService,
    private firebase: UploadToFirebase) {
   
    this.user = authService.user;
     

    // console.log("results are", this.results)
    // const getAllResults = this.firebase.restructureDocsInCollection(this.results);

   }
   getResults() {
    this.firebase.getAllResults().subscribe((this.results))
    console.log('hi', this.getResults());
  };

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
    this.firebase.getRecent(this.user,2).subscribe((results)=>{
      this.restructureData(results[0].categoryResults);
      console.log(this.datasets);
    });
  }

}
