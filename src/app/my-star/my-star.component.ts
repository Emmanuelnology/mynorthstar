import { Component, OnInit } from '@angular/core';
import { IResult, QuestionnaireService, exampleQuestions, Randomise } from '../services/questionnaire.service';

@Component({
  selector: 'app-my-star',
  templateUrl: './my-star.component.html',
  styleUrls: ['./my-star.component.scss']
})
export class MyStarComponent implements OnInit {
  questions = exampleQuestions;
  results: IResult;
  overallResult: number;

  constructor(private questionnaireService: QuestionnaireService, private rand: Randomise) {
    this.questions = this.rand.randomiseOrder(this.questions); // move to questionnaire component (here for demo/testing purposes)
    this.results = this.questionnaireService.getResults(this.questions);
    this.overallResult = this.results.overallResult;
  }

  ngOnInit() {
    this.overallResult = 7;
  }

}
