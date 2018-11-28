import { Component, OnInit } from '@angular/core';
import { IResult, QuestionnaireService, exampleQuestions } from '../services/questionnaire.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  questions = exampleQuestions;
  results: IResult[];
  overallResult: number;

  constructor(private questionnaireService: QuestionnaireService) {
    this.results = this.questionnaireService.getResults(this.questions);
    this.overallResult = this.questionnaireService.overallAverage(this.results);
  }

  ngOnInit() {
    this.overallResult= 7;
  }

}
