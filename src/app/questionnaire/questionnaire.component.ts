import { Component, OnInit } from '@angular/core';
import { exampleQuestions } from '../services/questionnaire.service';


export interface IQuestion {
  title: string;
  number: number;
  content: string;
  score: number;
  weight: number;
  category: string;
}

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})

export class QuestionnaireComponent implements OnInit {
  questions = [
    {
    title: 'Question 1',
    number: 1,
    content: 'I do not feel particularly pleased with the way I am',
    score: undefined,
    weight: 2,
    category: 'Happiness'
    },
    {
    title: 'Question 2',
    number: 2,
    content: 'I feel that life is very rewarding',
    score: undefined,
    weight: 5,
    category: 'Happiness'
    },
    {
    title: 'Question 3',
    number: 3,
    content: 'I rarely wake up feeling rested',
    score: undefined,
    weight: 5,
    category: 'Happiness'
    },
    {
    title: 'Question 4',
    number: 4,
    content: 'I laugh a lot',
    score: undefined,
    weight: 2,
    category: 'Happiness'
    }
    ];

  constructor() {
  }
   ngOnInit() {
  }

}
