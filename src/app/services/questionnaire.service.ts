import { Injectable } from '@angular/core';

interface CategoryObjects {
  score:number;
  weight:number;
}

interface Result {
  category:string;
  categoryAverage:number;
}

interface QuestionnaireObject {
  score:number;
  weight:number;
  category:string;
}

@Injectable({
  providedIn: 'root'
})

export class QuestionnaireService {
  
  constructor() { }

  calculateWeightedAverage(array:CategoryObjects[]):number {
    let weightTimesScoreSum = 0;
    let weightSum = 0;
    for (let index in array) {
      weightTimesScoreSum += array[index].score*array[index].weight;
      weightSum += array[index].weight;
    }
    let averageScore = weightTimesScoreSum/weightSum;
    return averageScore;
  }
  
  getResults(initialResults:QuestionnaireObject[]):Result[] {
    let friendsArray:CategoryObjects[];
    let financeArray:CategoryObjects[];
    
    for (let index in initialResults) {
      if (initialResults[index].category == 'friends') {
        let catOb:CategoryObjects;
        catOb.score = initialResults[index].score;
        catOb.weight = initialResults[index].weight;
        friendsArray.push(catOb);
      } else if (initialResults[index].category == 'finance') {
        let catOb:CategoryObjects;
        catOb.score = initialResults[index].score;
        catOb.weight = initialResults[index].weight;
        financeArray.push(catOb);
      }
    }
    let friendsAverage = {
      category:'friends', 
      categoryAverage: this.calculateWeightedAverage(friendsArray)
    }
    let financeAverage = {
      category: 'finance', 
      categoryAverage: this.calculateWeightedAverage(financeArray)
    }
    let results = [friendsAverage, financeAverage];
    return results;
  }
}