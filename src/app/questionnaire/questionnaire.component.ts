import { Component, OnInit } from '@angular/core';
import { QuestionnaireService, IQuestion, IResult } from '../services/questionnaire.service';


@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})

export class QuestionnaireComponent implements OnInit {
  questions:IQuestion[] = [
    {
      score: 5,
      weight: 2,
      category: 'friends'
    },
    {
      score: 1,
      weight: 4,
      category: 'finance'
    },
    {
      score: 5,
      weight: 5,
      category: 'friends'
    },
    {
      score: 9,
      weight: 2,
      category: 'finance'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
