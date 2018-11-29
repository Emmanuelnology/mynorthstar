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
    number: null,
    question: 'I do not feel particularly pleased with the way I am',
    score: 2,
    weight: 4,
    category: 'Happiness',
    positive: false
  },
  {
    title: 'Question 2',
    number: null,
    question: 'I am classed as tall',
    score: 5,
    weight: 5,
    category: 'Personal growth'
  },
  {
    title: 'Question 3',
    number: null,
    question: 'I see my friends/family more than once a week',
    score: 10,
    weight: 3,
    category: 'Friends & family'
  },
  {
    title: 'Question 4',
    number: null,
    question: 'I laugh a lot',
    score: 1,
    weight: 2,
    category: 'Happiness'
  },
  {
    title: 'Question 5',
    number: null,
    question: 'I do yoga',
    score: 1,
    weight: 1,
    category: 'Spirituality'
  },
  {
    title: 'Question 6',
    number: null,
    question: 'I worry about my financial situation',
    score: 1,
    weight: 3,
    category: 'Money',
    positive: false
  },
  {
    title: 'Question 7',
    number: null,
    question: 'I have a job which is relevant to my skill level',
    score: 9,
    weight: 4,
    category: 'Career'
  },
  {
    title: 'Question 8',
    number: null,
    question: 'I have a partner/ stable relationship',
    score: 8,
    weight: 7,
    category: 'Romance & relationships'
  },
  {
    title: 'Question 9',
    number: null,
    question: 'I enjoy my job',
    score: 8,
    weight: 4,
    category: 'Happiness'
  },
  {
    title: 'Question 10',
    number: null,
    question: 'I watch Netflix often',
    score: 5,
    weight: 2,
    category: 'Home & environment',
    positive: false
  },
  {
    title: 'Question 11',
    number: null,
    question: 'I regularly eat my five a day',
    score: 4,
    weight: 4,
    category: 'Health & wellbeing'
  },
  {
    title: 'Question 12',
    number: null,
    question: 'I regularly exercise',
    score: 7,
    weight: 4,
    category: 'Health & wellbeing'
  },
  {
    title: 'Question 13',
    number: null,
    question: 'My house is untidy',
    score: 4,
    weight: 4,
    category: 'Home & environment',
    positive: false
  },
  {
    title: 'Question 14',
    number: null,
    question: 'I only see my friends at the travelodge',
    score: 4,
    weight: 2,
    category: 'Romance & relationships',
    positive: false
  },
  {
    title: 'Question 15',
    number: null,
    question: 'I have savings',
    score: 4,
    weight: 5,
    category: 'Money'
  },
  {
    title: 'Question 16',
    number: null,
    question: 'I am good at networking',
    score: 4,
    weight: 2,
    category: 'Career'
  }
];

@Injectable({
  providedIn: 'root'
})

export class QuestionnaireService {

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
          if (currentQuestion.positive === false) {
            currentQuestion.score = 10 - currentQuestion.score;
            currentQuestion.positive = true;
          }
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

@Injectable({
  providedIn: 'root'
})

export class Randomise {

  constructor() { }

  randomiseOrder(questionArray: IQuestion[]) {
    const randomNumberArray = this.createUnorderedArray(questionArray);
    const unsortedQuestionArray = this.assignQuestionRandomNumbers(questionArray, randomNumberArray);
    const sortedQuestionArray = unsortedQuestionArray.sort(function(obj1, obj2) {
      return obj1.number - obj2.number;
    });
    return sortedQuestionArray;
  }

  createUnorderedArray(questionArray: IQuestion[]): number[] {
    const randomNumberArray = [];
    for (const index in questionArray) {
      if (questionArray.hasOwnProperty(index)) {
        randomNumberArray.push(index);
      }
    }
    randomNumberArray.sort( () => Math.random() - 0.5);
    return randomNumberArray;
  }

  assignQuestionRandomNumbers(questionArray: IQuestion[], randomNumberArray: number[]): IQuestion[] {
    for (const index in questionArray) {
      if (questionArray.hasOwnProperty(index)) {
        questionArray[index].number = randomNumberArray[index];
        questionArray[index].number ++;
      }
    }
    return questionArray;
  }

}
