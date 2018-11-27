import { Injectable } from '@angular/core';
import { IQuestion } from '../questionnaire/questionnaire.component';

export interface ICategory {
  score: number;
  weight: number;
}

export interface IResult {
  category: string;
  categoryAverage: number;
}

export let exampleQuestions: IQuestion[] = [
  {
    title: 'Question 1',
    number: 1,
    content: 'I do not feel particularly pleased with the way I am',
    score: 3,
    weight: 2,
    category: 'Happiness'
    },
    {
    title: 'Question 2',
    number: 2,
    content: 'I feel that life is very rewarding',
    score: 6,
    weight: 5,
    category: 'Happiness'
    },
    {
    title: 'Question 3',
    number: 3,
    content: 'I rarely wake up feeling rested',
    score: 4,
    weight: 5,
    category: 'Friends'
    },
    {
    title: 'Question 4',
    number: 4,
    content: 'I laugh a lot',
    score: 1,
    weight: 2,
    category: 'Friends'
    }
];

@Injectable({
  providedIn: 'root'
})

export class QuestionnaireService {
  constructor() { }
  calculateWeightedAverage(array: ICategory[]): number {
    let weightTimesScoreSum = 0;
    let weightSum = 0;
    for (const index in array) {
      if (array.hasOwnProperty(index)) {
        weightTimesScoreSum += array[index].score * array[index].weight;
        weightSum += array[index].weight;
      }
    }
    const averageScore = weightTimesScoreSum / weightSum;
    return averageScore;
  }

  createCatOb(question: IQuestion): ICategory {
    const catOb: ICategory = {score: 0, weight: 0};
    catOb.score = question.score;
    catOb.weight = question.weight;
    return catOb;
  }

  getCategories(initialResults: IQuestion[]): string[] {
    const foundCategories: string[] = [];
    for (const index in initialResults) {
      if (initialResults.hasOwnProperty(index)) {
        const currentCategory = initialResults[index].category;
        if (foundCategories.indexOf(currentCategory) < 0) {
          foundCategories.push(currentCategory);
        }
      }
    }
    return foundCategories;
  }

  getResults(initialResults: IQuestion[]): IResult[] {
    const foundCategories = this.getCategories(initialResults);
    let results: IResult[] = [];
    for (const categoryIndex of foundCategories) {
      const array: ICategory[] = [];
      for (const questionIndex in initialResults) {
        if (initialResults[questionIndex].category === categoryIndex) {
          const catOb = this.createCatOb(initialResults[questionIndex]);
          array.push(catOb);
        }
      }
      const average = {
        category: categoryIndex,
        categoryAverage: this.calculateWeightedAverage(array)
      };
      results = results.concat(average);
    }
    return results;
  }
}
