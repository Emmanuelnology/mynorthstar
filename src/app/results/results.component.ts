import { Component, OnInit } from '@angular/core';
import { IResult, QuestionnaireService, exampleQuestions } from '../services/questionnaire.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  questions = exampleQuestions;
  results:IResult[] = [
    {
      category: 'A category',
      categoryAverage: 4
    }
];
  
  constructor(public service:QuestionnaireService) {
    //this.results = this.service.getResults(this.questions);
  }

  ngOnInit() {
  }

}
