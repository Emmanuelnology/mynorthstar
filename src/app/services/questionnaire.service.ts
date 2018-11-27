import { Injectable } from '@angular/core';
import { iterateListLike } from '@angular/core/src/change_detection/change_detection_util';
// import { IQuestion } from '../questionnaire/questionnaire.component';

export interface ICategory {
  score:number;
  weight:number;
}

export interface IResult {
  category:string;
  categoryAverage:number;
}

export interface IQuestion {
  text:string,
  score:number;
  weight:number;
  category:'friends'|'finance';
}

export let exampleQuestions:IQuestion[] = [
  {
    text:'how many cats do you have',
    score: 5,
    weight: 2,
    category: 'friends'
  },
  {
    text: 'how much money do you have',
    score: 1,
    weight: 4,
    category: 'finance'
  },
  {
    text: 'how many friends',
    score: 5,
    weight: 5,
    category: 'friends'
  },
  {
    text: 'how much debt',
    score: 9,
    weight: 2,
    category: 'finance'
  }
];

@Injectable({
  providedIn: 'root'
})

export class QuestionnaireService {
  
  constructor() { }
  
  calculateWeightedAverage(array:ICategory[]):number {
    let weightTimesScoreSum = 0;
    let weightSum = 0;
    for (let index in array) {
      weightTimesScoreSum += array[index].score*array[index].weight;
      weightSum += array[index].weight;
    }
    let averageScore = weightTimesScoreSum/weightSum;
    return averageScore;
  }
  
  createCatOb(question:IQuestion):ICategory {
    let catOb:ICategory = {score:0, weight:0};
    catOb.score = question.score;
    catOb.weight = question.weight;
    return catOb;
  }
  
  getCategories(initialResults:IQuestion[]):string[] {
    let foundCategories:string[] = [];
    for (let index in initialResults) {
      let currentCategory = initialResults[index].category;
      if (foundCategories.indexOf(currentCategory) < 0) foundCategories.push(currentCategory);
    }
    return foundCategories;
  }
  
  getResults(initialResults:IQuestion[]):IResult[] {
    let foundCategories = this.getCategories(initialResults);
    let results:IResult[] = [];    
    for (let categoryIndex of foundCategories) {
      let array:ICategory[] = [];
      for (let questionIndex in initialResults) {
        if (initialResults[questionIndex].category == categoryIndex) {
          let catOb = this.createCatOb(initialResults[questionIndex])
          array.push(catOb);
        }
      }
      let average = {
        category: categoryIndex, 
        categoryAverage: this.calculateWeightedAverage(array)
      }
      results = results.concat(average);
    }
    return results;
  }
}