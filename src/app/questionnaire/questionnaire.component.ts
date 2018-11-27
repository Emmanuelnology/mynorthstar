import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  questions = [ 
    {
    title: 'Question 1',
    content: 'I do not feel particularly pleased with the way I am',
    weighting: 2
    },
    {
    title: 'Question 2',
    content: 'I feel that life is very rewarding',
    weighting: 5
    },
    {
    title: 'Question 3',
    content: 'I rarely wake up feeling rested',
    weighting: 5
    },
    ]

  constructor() {

   }

  ngOnInit() {
  }

}
