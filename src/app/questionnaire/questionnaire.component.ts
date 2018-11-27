import { Component, OnInit } from '@angular/core';
import { exampleQuestions } from '../services/questionnaire.service';


@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})

export class QuestionnaireComponent implements OnInit {
  questions = exampleQuestions;

  constructor() {
  }

  ngOnInit() {
  }

}
