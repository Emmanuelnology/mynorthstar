import { Injectable } from '@angular/core';
import { IQuestion } from '../questionnaire/questionnaire.component';
import { summaryForJitName } from '@angular/compiler/src/aot/util';

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
    category: 'Personal growth'
    },
    {
    title: 'Question 3',
    number: 3,
    content: 'I rarely wake up feeling rested',
    score: 4,
    weight: 5,
    category: 'Friends and family'
    },
    {
    title: 'Question 4',
    number: 4,
    content: 'I laugh a lot',
    score: 1,
    weight: 2,
    category: 'Friends and family'
    },
    {
    title: 'Question 5',
    number: 5,
    content: 'I DO NOT laugh a lot',
    score: 3,
    weight: 5,
    category: 'Spirituality'
    },
    {
    title: 'Question 6',
    number: 6,
    content: 'I am getting paid to go to nology',
    score: 1,
    weight: 6,
    category: 'Money'
    },
    {
    title: 'Question 7',
    number: 7,
    content: 'I work at nationwide',
    score: 9,
    weight: 1,
    category: 'Career'
    },
    {
    title: 'Question 8',
    number: 8,
    content: 'I have a partner',
    score: 8,
    weight: 7,
    category: 'Romance and relationships'
    },
    {
    title: 'Question 9',
    number: 9,
    content: 'I laugh a lot',
    score: 1,
    weight: 4,
    category: 'Happiness'
    },
    {
    title: 'Question 10',
    number: 10,
    content: 'I dont have netflix',
    score: 3,
    weight: 2,
    category: 'Home and environment'
    },
    {
    title: 'Question 11',
    number: 11,
    content: 'I dont eat out everyday',
    score: 8,
    weight: 2,
    category: 'Health and wellbeing'
    },
];

@Injectable({
  providedIn: 'root'
})

export class QuestionnaireService {

  protected decimalPlaces = 2;

  constructor() { }

  calculateWeightedAverage(array: ICategory[]): number {
    let weightTimesScoreSum = 0;
    let weightSum = 0;
    for (const categoryIndex in array) {
      if (array.hasOwnProperty(categoryIndex)) {
        weightTimesScoreSum += array[categoryIndex].score * array[categoryIndex].weight;
        weightSum += array[categoryIndex].weight;
      }
    }
    const averageScore = weightTimesScoreSum / weightSum;
    const roundedAverage =  this.roundNumber(averageScore, this.decimalPlaces);
    return this.decimalPadding(roundedAverage, this.decimalPlaces);
  }

  createCatOb(question: IQuestion): ICategory {
    const catOb: ICategory = {score: 0, weight: 0};
    catOb.score = question.score;
    catOb.weight = question.weight;
    return catOb;
  }

  getCategories(initialResults: IQuestion[]): string[] {
    const foundCategories: string[] = [];
    for (const questionIndex in initialResults) {
      if (initialResults.hasOwnProperty(questionIndex)) {
        const currentCategory = initialResults[questionIndex].category;
        if (foundCategories.indexOf(currentCategory) < 0) {
          foundCategories.push(currentCategory);
        }
      }
    }
    return foundCategories.sort();
  }

  roundNumber(number: number, decimals: number): number {
    const powerOfTen = Math.pow(10, decimals);
    const bigNumber = Math.floor(number * powerOfTen);
    return bigNumber / powerOfTen;
  }

  decimalPadding(number: number, decimals: number): number {
    if (number === Math.floor(number)) {
      // let decimalisation =  number + "." + ('1').repeat(decimals);
      // return number.toFixed(decimals);
      return number;
    }
    return number;
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

  overallAverage(results: IResult[]): number {
    let sumOfResults = 0;
    for (const resultIndex in results) {
      if (results.hasOwnProperty(resultIndex)) {
        sumOfResults += results[resultIndex].categoryAverage;
      }
    }
    const average = sumOfResults / results.length;
    return this.roundNumber(average, this.decimalPlaces);
  }
}
