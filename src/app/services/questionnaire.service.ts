import { Injectable } from '@angular/core';
import { summaryForJitName } from '@angular/compiler/src/aot/util';

export interface IQuestion {
  title: string;
  number: number;
  question: string;
  score: number;
  weight: number;
  category: string;
  positive?: boolean;
}

export interface ICategory {
  score: number;
  weight: number;
}

export interface ICategoryResult {
  category: string;
  categoryAverage: number;
}

export interface IResult {
  categoryResults: ICategoryResult[];
  overallResult: number;
}

export let exampleQuestions: IQuestion[] = [
  {
    title: 'Question 1',
    number: 1,
    question: 'I do not feel particularly pleased with the nology help system',
    score: 5,
    weight: 2,
    category: 'Happiness'
  },
  {
    title: 'Question 2',
    number: 2,
    question: 'I feel that Craig is ignoring us',
    score: 6,
    weight: 5,
    category: 'Personal growth',
    positive: false
  },
  {
    title: 'Question 3',
    number: 3,
    question: 'I rarely wake up feeling rested',
    score: 10,
    weight: 5,
    category: 'Friends and family'
  },
  {
    title: 'Question 4',
    number: 4,
    question: 'I laugh a lot',
    score: 1,
    weight: 2,
    category: 'Friends and family'
  },
  {
    title: 'Question 5',
    number: 5,
    question: 'I DO NOT laugh a lot',
    score: 3,
    weight: 5,
    category: 'Spirituality'
  },
  {
    title: 'Question 6',
    number: 6,
    question: 'I am getting paid to go to nology',
    score: 1,
    weight: 6,
    category: 'Money'
  },
  {
    title: 'Question 7',
    number: 7,
    question: 'I work at nationwide',
    score: 9,
    weight: 1,
    category: 'Career'
  },
  {
    title: 'Question 8',
    number: 8,
    question: 'I have a partner',
    score: 8,
    weight: 7,
    category: 'Romance and relationships'
  },
  {
    title: 'Question 9',
    number: 9,
    question: 'I laugh a lot',
    score: 1,
    weight: 4,
    category: 'Happiness'
  },
  {
    title: 'Question 10',
    number: 10,
    question: 'I dont have netflix',
    score: 3,
    weight: 2,
    category: 'Home and environment'
  },
  {
    title: 'Question 11',
    number: 11,
    question: 'I dont eat out everyday',
    score: 9,
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

  getResults(initialResults: IQuestion[]): IResult {
    const categoryAverages = this.getCategoryAverages(initialResults);
    const overallAverage = this.getOverallAverage(categoryAverages);
    const output: IResult = {
      categoryResults: categoryAverages,
      overallResult: overallAverage
    };
    return output;
  }

  getCategoryAverages(initialResults: IQuestion[]): ICategoryResult[] {
    const positiveResults = this.makePositive(initialResults);
    const foundCategories = this.getCategories(positiveResults);
    let averages: ICategoryResult[] = [];
    for (const categoryIndex of foundCategories) {
      let array: ICategory[] = [];
      array = this.createCategoryObjects(positiveResults, categoryIndex, array);
      const average = {
        category: categoryIndex,
        categoryAverage: this.calculateWeightedAverage(array)
      };
      averages = averages.concat(average);
    }
    return averages;
  }

  makePositive(questionArray: IQuestion[]): IQuestion[] {
    for (const questionIndex in questionArray) {
      if (questionArray.hasOwnProperty(questionIndex)) {
        const currentQuestion = questionArray[questionIndex];
        if (currentQuestion.hasOwnProperty('positive')) {
          currentQuestion.score = 10 - currentQuestion.score;
        }
      }
    }
    return questionArray;
  }

  getCategories(questionArray: IQuestion[]): string[] {
    const foundCategories: string[] = [];
    for (const questionIndex in questionArray) {
      if (questionArray.hasOwnProperty(questionIndex)) {
        const currentCategory = questionArray[questionIndex].category;
        if (foundCategories.indexOf(currentCategory) < 0) {
          foundCategories.push(currentCategory);
        }
      }
    }
    return foundCategories.sort();
  }

  createCategoryObjects(positiveResults: IQuestion[], categoryIndex: string, array: ICategory[]): ICategory[] {
    for (const questionIndex in positiveResults) {
      if (positiveResults[questionIndex].category === categoryIndex) {
        const catOb = this.createCatOb(positiveResults[questionIndex]);
        array.push(catOb);
      }
    }
    return array;
  }

  createCatOb(question: IQuestion): ICategory {
    const catOb: ICategory = {score: 0, weight: 0};
    catOb.score = question.score;
    catOb.weight = question.weight;
    return catOb;
  }

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
    return averageScore;
  }

  getOverallAverage(results: ICategoryResult[]): number {
    let sumOfResults = 0;
    for (const resultIndex in results) {
      if (results.hasOwnProperty(resultIndex)) {
        sumOfResults += results[resultIndex].categoryAverage;
      }
    }
    const average = sumOfResults / results.length;
    return average;
  }
}
