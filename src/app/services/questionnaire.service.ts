import { Injectable } from '@angular/core';

export interface IQuestion {
  title: string;
  number: number;
  question: string;
  score: number;
  weight: number;
  category: string;
  positive: boolean;
}

export interface ICategory {
  score: number;
  weight: number;
}

export interface ICategoryResult {
  categoryName: string;
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
    score: 4,
    weight: 5,
    category: 'Personal growth',
    positive: true
  },
  {
    title: 'Question 3',
    number: null,
    question: 'I see my friends/family more than once a week',
    score: 4,
    weight: 3,
    category: 'Friends & family',
    positive: true
  },
  {
    title: 'Question 4',
    number: null,
    question: 'I laugh a lot',
    score: 7,
    weight: 2,
    category: 'Happiness',
    positive: true
  },
  {
    title: 'Question 5',
    number: null,
    question: 'I do yoga',
    score: 3,
    weight: 1,
    category: 'Spirituality',
    positive: true
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
    category: 'Career',
    positive: true
  },
  {
    title: 'Question 8',
    number: null,
    question: 'I have a partner/ stable relationship',
    score: 8,
    weight: 7,
    category: 'Relationships',
    positive: true
  },
  {
    title: 'Question 9',
    number: null,
    question: 'I enjoy my job',
    score: 8,
    weight: 4,
    category: 'Happiness',
    positive: true
  },
  {
    title: 'Question 10',
    number: null,
    question: 'I watch Netflix often',
    score: 8,
    weight: 2,
    category: 'Home & environment',
    positive: false
  },
  {
    title: 'Question 11',
    number: null,
    question: 'I regularly eat my five a day',
    score: 4,
    weight: 2,
    category: 'Health & wellbeing',
    positive: true
  },
  {
    title: 'Question 12',
    number: null,
    question: 'I regularly exercise',
    score: 7,
    weight: 5,
    category: 'Health & wellbeing',
    positive: true
  },
  {
    title: 'Question 13',
    number: null,
    question: 'My house is untidy',
    score: 7,
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
    category: 'Relationships',
    positive: false
  },
  {
    title: 'Question 15',
    number: null,
    question: 'I have savings',
    score: 6,
    weight: 5,
    category: 'Money',
    positive: true
  },
  {
    title: 'Question 16',
    number: null,
    question: 'I am good at networking',
    score: 4,
    weight: 2,
    category: 'Career',
    positive: true
  }
];

@Injectable({
  providedIn: 'root'
})

export class QuestionnaireService {

  constructor() { }

  getResults(questionArray: IQuestion[]): IResult {
    const categoryAverages: ICategoryResult[] = this.getCategoryAverages(questionArray);
    const overallAverage: number = this.getOverallAverage(categoryAverages);
    const result: IResult = {
      categoryResults: categoryAverages,
      overallResult: overallAverage
    };
    return result;
  }

  getCategoryAverages(questionArray: IQuestion[]): ICategoryResult[] {
    const positiveAnswers: IQuestion[] = this.makePositive(questionArray);
    const foundCategories: string[] = this.getCategories(positiveAnswers);
    let categoryAverages: ICategoryResult[] = [];
    for (const category of foundCategories) {
      let sameCategoryArray: ICategory[] = [];
      sameCategoryArray = this.createCategoryObjects(positiveAnswers, category, sameCategoryArray);
      const average: ICategoryResult = {
        categoryName: category,
        categoryAverage: this.calculateWeightedAverage(sameCategoryArray)
      };
      categoryAverages = categoryAverages.concat(average);
    }
    return categoryAverages;
  }

  makePositive(questionArray: IQuestion[]): IQuestion[] {
    for (const question of questionArray) {
      if (question.positive === false) {
        question.score = 10 - question.score;
        question.positive = true;
      }
    }
    return questionArray;
  }

  getCategories(questionArray: IQuestion[]): string[] {
    const foundCategories: string[] = [];
    for (const question of questionArray) {
      const currentCategory: string = question.category;
      if (foundCategories.indexOf(currentCategory) < 0) {
        foundCategories.push(currentCategory);
      }
    }
    return foundCategories.sort();
  }

  createCategoryObjects(questionArray: IQuestion[], category: string, sameCategoryArray: ICategory[]): ICategory[] {
    for (const question of questionArray) {
      if (question.category === category) {
        const categoryObject: ICategory = this.createSingleCategoryObject(question);
        sameCategoryArray.push(categoryObject);
      }
    }
    return sameCategoryArray;
  }

  createSingleCategoryObject(question: IQuestion): ICategory {
    const categoryObject: ICategory = {
      score: question.score,
      weight: question.weight
    };
    return categoryObject;
  }

  calculateWeightedAverage(sameCategoryArray: ICategory[]): number {
    let weightTimesScoreSum = 0;
    let weightSum = 0;
    for (const sameCategory of sameCategoryArray) {
        weightTimesScoreSum += sameCategory.score * sameCategory.weight;
        weightSum += sameCategory.weight;
    }
    const averageScore: number = weightTimesScoreSum / weightSum;
    return averageScore;
  }

  getOverallAverage(categoryAverages: ICategoryResult[]): number {
    let sumOfResults = 0;
    for (const category of categoryAverages) {
      sumOfResults += category.categoryAverage;
    }
    const overallAverage: number = sumOfResults / categoryAverages.length;
    return overallAverage;
  }
}

@Injectable({
  providedIn: 'root'
})

export class Randomise {

  constructor() { }

  randomiseOrder(questionArray: IQuestion[]) {
    const unsortedIntegerArray: number[] = this.createUnorderedArray(questionArray);
    const unsortedQuestionArray: IQuestion[] = this.assignQuestionRandomNumbers(questionArray, unsortedIntegerArray);
    const sortedQuestionArray: IQuestion[] = unsortedQuestionArray.sort(function(question1, question2) {
      return question1.number - question2.number;
    });
    return sortedQuestionArray;
  }

  createUnorderedArray(questionArray: IQuestion[]): number[] {
    const unsortedIntegerArray: number[] = [];
    for (const index in questionArray) {
      if (questionArray.hasOwnProperty(index)) {
        unsortedIntegerArray.push(parseInt(index, 10));
      }
    }
    unsortedIntegerArray.sort( () => Math.random() - 0.5);
    return unsortedIntegerArray;
  }

  assignQuestionRandomNumbers(questionArray: IQuestion[], unsortedIntegerArray: number[]): IQuestion[] {
    for (const index in unsortedIntegerArray) {
      if (unsortedIntegerArray.hasOwnProperty(index)) {
        questionArray[index].number = unsortedIntegerArray[index];
        questionArray[index].number ++;
      }
    }
    return questionArray;
  }

}
