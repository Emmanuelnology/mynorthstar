import { Component, OnInit } from '@angular/core';
import { IResult, QuestionnaireService, exampleQuestions } from '../services/questionnaire.service';
import { IDataSet } from '../main-star/main-star.component';


@Component({
  selector: 'app-my-star',
  templateUrl: './my-star.component.html',
  styleUrls: ['./my-star.component.scss']
})
export class MyStarComponent implements OnInit {
  questions = exampleQuestions;
  results: IResult;
  overallResult: number;
  datasets: IDataSet[] = [];
  labels: string [] = [];


  constructor(private questionnaireService: QuestionnaireService) {
    this.results = this.questionnaireService.getResults(this.questions);
    this.overallResult = this.results.overallResult;

  this.restructureData(this.results.categoryResults);

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
  }

}
