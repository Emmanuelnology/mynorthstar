import { Component, OnInit } from '@angular/core';

export interface IQuestion {
  title: string;
  number: number;
  content: string;
  score: number;
  weight: number;
  category: string;
  positive?: boolean;
}

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
      content: '1. I do not feel particularly pleased with the way I am',
      score: undefined,
      weight: 2,
      category: 'Happiness',
      positive: false
    },
    {
      title: 'Question 2',
      number: 2,
      content: '2. I feel that life is very rewarding',
      score: undefined,
      weight: 5,
      category: 'Happiness',
    },
    {
      title: 'Question 3',
      number: 3,
      content: '3. I rarely wake up feeling rested',
      score: undefined,
      weight: 5,
      category: 'Happiness',
      positive: false
    },
    {
      title: 'Question 4',
      number: 4,
      content: '4. I laugh a lot',
      score: undefined,
      weight: 2,
      category: 'Happiness'
    },
    {
      title: 'Question 5',
      number: 5,
      content: '5. I could handle a major unexpected expense',
      score: undefined,
      weight: 5,
      category: 'Finances'
    },
    {
      title: 'Question 6',
      number: 6,
      content: '6. I can enjoy life because of the way I’m managing my money',
      score: undefined,
      weight: 2,
      category: 'Finances'
    },
    {
      title: 'Question 7',
      number: 7,
      content: '7. During your conversations, do you find yourself often defending your actions',
      score: undefined,
      weight: 6,
      category: 'Relationships',
      positive: false
    },
    {
      title: 'Question 8',
      number: 8,
      content: '8. In general, I am satisfied with my friendships',
      score: undefined,
      weight: 2,
      category: 'Relationships',
    },
    {
      title: 'Question 9',
      number: 9,
      content: '9. I wonder whether my friends really care about me',
      score: undefined,
      weight: 7,
      category: 'Relationships',
      positive: false
    },
    {
      title: 'Question 10',
      number: 10,
      content: '10. I regularly meet friends for social activities',
      score: undefined,
      weight: 7,
      category: 'Fun and Recreation',
    },
    {
      title: 'Question 11',
      number: 11,
      content: '11. I often do activities which leave me feeling happy',
      score: undefined,
      weight: 4,
      category: 'Fun and Recreation',
    },
    {
      title: 'Question 12',
      number: 12,
      content: '12. I play sport or do exercise regularly',
      score: undefined,
      weight: 1,
      category: 'Fun and Recreation',
    }
    ];

  constructor() {
  }
   ngOnInit() {
  }

}
