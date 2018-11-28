import { Component, OnInit } from '@angular/core';
import { IQuestion } from '../services/questionnaire.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})

export class QuestionnaireComponent implements OnInit {
  questions: IQuestion[] = [
    {
      title: 'Question 1',
      number: 1,
      question: '1. I do not feel particularly pleased with the way I am',
      score: undefined,
      weight: 2,
      category: 'Happiness',
      positive: false
    },
    {
      title: 'Question 2',
      number: 2,
      question: '2. I feel that life is very rewarding',
      score: undefined,
      weight: 5,
      category: 'Happiness',
    },
    {
      title: 'Question 3',
      number: 3,
      question: '3. I rarely wake up feeling rested',
      score: undefined,
      weight: 5,
      category: 'Happiness',
      positive: false
    },
    {
      title: 'Question 4',
      number: 4,
      question: '4. I laugh a lot',
      score: undefined,
      weight: 2,
      category: 'Happiness'
    },
    {
      title: 'Question 5',
      number: 5,
      question: '5. I could handle a major unexpected expense',
      score: undefined,
      weight: 5,
      category: 'Finances'
    },
    {
      title: 'Question 6',
      number: 6,
      question: '6. I can enjoy life because of the way I’m managing my money',
      score: undefined,
      weight: 2,
      category: 'Finances'
    },
    {
      title: 'Question 7',
      number: 7,
      question: '7. During your conversations, do you find yourself often defending your actions',
      score: undefined,
      weight: 6,
      category: 'Relationships',
      positive: false
    }
    ];

  constructor() {
  }
   ngOnInit() {
  }

}
