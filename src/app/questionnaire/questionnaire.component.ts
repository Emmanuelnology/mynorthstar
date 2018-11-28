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
      category: 'Money'
    },
    {
      title: 'Question 6',
      number: 6,
      question: '6. I can enjoy life because of the way I’m managing my money',
      score: undefined,
      weight: 2,
      category: 'Money'
    },
    {
      title: 'Question 7',
      number: 7,
      question: '7. During your conversations, do you find yourself often defending your actions',
      score: undefined,
      weight: 6,
      category: 'Romance and relationships',
      positive: false
    },
    {
      title: 'Question 8',
      number: 8,
      question: '8. In general, I am satisfied with my friendships',
      score: undefined,
      weight: 2,
      category: 'Romance and relationships',
    },
    {
      title: 'Question 9',
      number: 9,
      question: '9. I wonder whether my friends really care about me',
      score: undefined,
      weight: 7,
      category: 'Romance and relationships',
      positive: false
    },
    {
      title: 'Question 10',
      number: 10,
      question: '10. I regularly meet friends for social activities',
      score: undefined,
      weight: 7,
      category: 'Fun and Recreation',
    },
    {
      title: 'Question 11',
      number: 11,
      question: '11. I often do activities which leave me feeling happy',
      score: undefined,
      weight: 4,
      category: 'Fun and Recreation',
    },
    {
      title: 'Question 12',
      number: 12,
      question: '12. I play sport or do exercise regularly',
      score: undefined,
      weight: 1,
      category: 'Fun and Recreation',
    },
    {
      title: 'Question 13',
      number: 13,
      question: '13. I do not eat out everyday',
      score: undefined,
      weight: 2,
      category: 'Health and wellbeing',
      positive: false
    },
    {
      title: 'Question 14',
      number: 14,
      question: '14. I do not believe in God',
      score: undefined,
      weight: 5,
      category: 'Spirituality',
      positive: false
    },
    {
      title: 'Question 15',
      number: 15,
      question: '15. I am meeting my personal targets',
      score: undefined,
      weight: 3,
      category: 'Personal Growth',
    }
    ];

  constructor() {
  }
   ngOnInit() {
  }

}
