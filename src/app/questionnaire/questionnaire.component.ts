import { Component, OnInit } from '@angular/core';
import { IQuestion, Randomise } from '../services/questionnaire.service';

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
      question: 'I do not feel particularly pleased with the way I am',
      score: undefined,
      weight: 2,
      category: 'Happiness',
      positive: false
    },
    {
      title: 'Question 2',
      number: 2,
      question: 'I feel that life is very rewarding',
      score: undefined,
      weight: 5,
      category: 'Happiness',
    },
    {
      title: 'Question 3',
      number: 3,
      question: 'I rarely wake up feeling rested',
      score: undefined,
      weight: 5,
      category: 'Happiness',
      positive: false
    },
    {
      title: 'Question 4',
      number: 4,
      question: 'I laugh a lot',
      score: undefined,
      weight: 2,
      category: 'Happiness'
    },
    {
      title: 'Question 5',
      number: 5,
      question: 'I could handle a major unexpected expense',
      score: undefined,
      weight: 5,
      category: 'Money'
    },
    {
      title: 'Question 6',
      number: 6,
      question: 'I can enjoy life because of the way I’m managing my money',
      score: undefined,
      weight: 2,
      category: 'Money'
    },
    {
      title: 'Question 7',
      number: 7,
      question: 'During your conversations, do you find yourself often defending your actions',
      score: undefined,
      weight: 6,
      category: 'Romance and relationships',
      positive: false
    },
    {
      title: 'Question 8',
      number: 8,
      question: 'In general, I am satisfied with my friendships',
      score: undefined,
      weight: 2,
      category: 'Romance and relationships',
    },
    {
      title: 'Question 9',
      number: 9,
      question: 'I wonder whether my friends really care about me',
      score: undefined,
      weight: 7,
      category: 'Romance and relationships',
      positive: false
    },
    {
      title: 'Question 10',
      number: 10,
      question: 'I regularly meet friends for social activities',
      score: undefined,
      weight: 7,
      category: 'Fun and Recreation',
    },
    {
      title: 'Question 11',
      number: 11,
      question: 'I often do activities which leave me feeling happy',
      score: undefined,
      weight: 4,
      category: 'Fun and Recreation',
    },
    {
      title: 'Question 12',
      number: 12,
      question: 'I play sport or do exercise regularly',
      score: undefined,
      weight: 1,
      category: 'Fun and Recreation',
    },
    {
      title: 'Question 13',
      number: 13,
      question: 'I do not eat out everyday',
      score: undefined,
      weight: 2,
      category: 'Health and wellbeing',
      positive: false
    },
    {
      title: 'Question 14',
      number: 14,
      question: 'I eat healthy',
      score: undefined,
      weight: 4,
      category: 'Health and wellbeing',
    },
    {
      title: 'Question 15',
      number: 15,
      question: 'I do not believe in God',
      score: undefined,
      weight: 7,
      category: 'Spirituality',
      positive: false
    },
    {
      title: 'Question 16',
      number: 16,
      question: 'I frequently pray',
      score: undefined,
      weight: 5,
      category: 'Spirituality',
    },
    {
      title: 'Question 17',
      number: 17,
      question: 'My faith gives me a feeling of security',
      score: undefined,
      weight: 5,
      category: 'Spirituality',
    },
    {
      title: 'Question 18',
      number: 18,
      question: 'I feel confident that I can complete all my tasks',
      score: undefined,
      weight: 5,
      category: 'Personal Growth',
    },
    {
      title: 'Question 19',
      number: 19,
      question: 'I am meeting my personal targets',
      score: undefined,
      weight: 3,
      category: 'Personal Growth',
    }
    ];

  constructor(private rand: Randomise) {    
    this.questions = this.rand.randomiseOrder(this.questions); 
  }
  
   ngOnInit() {
  }

}
