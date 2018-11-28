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
      content: 'I do not feel particularly pleased with the way I am',
      score: undefined,
      weight: 2,
      category: 'Happiness',
      positive: false
    },
    {
      title: 'Question 2',
      number: 2,
      content: 'I feel that life is very rewarding',
      score: undefined,
      weight: 5,
      category: 'Happiness',
    },
    {
      title: 'Question 3',
      number: 3,
      content: 'I rarely wake up feeling rested',
      score: undefined,
      weight: 5,
      category: 'Happiness',
      positive: false
    },
    {
      title: 'Question 4',
      number: 4,
      content: 'I laugh a lot',
      score: undefined,
      weight: 2,
      category: 'Happiness'
    },
    {
      title: 'Question 5',
      number: 5,
      content: 'I could handle a major unexpected expense',
      score: undefined,
      weight: 5,
      category: 'Money'
    },
    {
      title: 'Question 6',
      number: 6,
      content: 'I can enjoy life because of the way I’m managing my money',
      score: undefined,
      weight: 2,
      category: 'Money'
    },
    {
      title: 'Question 7',
      number: 7,
      content: 'During your conversations, do you find yourself often defending your actions',
      score: undefined,
      weight: 6,
      category: 'Romance and relationships',
      positive: false
    },
    {
      title: 'Question 8',
      number: 8,
      content: 'In general, I am satisfied with my friendships',
      score: undefined,
      weight: 2,
      category: 'Romance and relationships',
    },
    {
      title: 'Question 9',
      number: 9,
      content: 'I wonder whether my friends really care about me',
      score: undefined,
      weight: 7,
      category: 'Romance and relationships',
      positive: false
    },
    {
      title: 'Question 10',
      number: 10,
      content: 'I regularly meet friends for social activities',
      score: undefined,
      weight: 7,
      category: 'Fun and Recreation',
    },
    {
      title: 'Question 11',
      number: 11,
      content: 'I often do activities which leave me feeling happy',
      score: undefined,
      weight: 4,
      category: 'Fun and Recreation',
    },
    {
      title: 'Question 12',
      number: 12,
      content: 'I play sport or do exercise regularly',
      score: undefined,
      weight: 1,
      category: 'Fun and Recreation',
    },
    {
      title: 'Question 13',
      number: 13,
      content: 'I do not eat out everyday',
      score: undefined,
      weight: 2,
      category: 'Health and wellbeing',
      positive: false
    },
    {
      title: 'Question 14',
      number: 14,
      content: 'I eat healthy',
      score: undefined,
      weight: 4,
      category: 'Health and wellbeing',
    },
    {
      title: 'Question 15',
      number: 15,
      content: 'I do not believe in God',
      score: undefined,
      weight: 7,
      category: 'Spirituality',
      positive: false
    },
    {
      title: 'Question 16',
      number: 16,
      content: 'I frequently pray',
      score: undefined,
      weight: 5,
      category: 'Spirituality',
    },
    {
      title: 'Question 17',
      number: 17,
      content: 'My faith gives me a feeling of security',
      score: undefined,
      weight: 5,
      category: 'Spirituality',
    },
    {
      title: 'Question 18',
      number: 18,
      content: 'I feel confident that I can complete all my tasks',
      score: undefined,
      weight: 5,
      category: 'Personal Growth',
    },
    {
      title: 'Question 19',
      number: 19,
      content: 'I am meeting my personal targets',
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
