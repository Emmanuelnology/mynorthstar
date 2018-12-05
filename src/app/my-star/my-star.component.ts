import { Component, OnInit } from '@angular/core';
import { IResult, QuestionnaireService, exampleQuestions } from '../services/questionnaire.service';



@Component({
  selector: 'app-my-star',
  templateUrl: './my-star.component.html',
  styleUrls: ['./my-star.component.scss']
})
export class MyStarComponent implements OnInit {
  questions = exampleQuestions;
  results: IResult;
  overallResult: number;
  datasets: number[][] = [];
  labels: string [] = [];


  constructor(private questionnaireService: QuestionnaireService) {
    const results = this.questionnaireService.getResults(this.questions);

  }

  restructureData(results) {
    const data: number[] = [];
    for (const result of results) {
      this.labels.push(result.categoryName);
      data.push(Math.round(result.categoryAverage * 100) / 100);
    }
    this.datasets.push(data);
  }

  ngOnInit() {
  }

}
