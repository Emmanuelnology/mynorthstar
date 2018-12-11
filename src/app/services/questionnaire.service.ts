import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

export interface IQuestion {
  title: string;
  number: number;
  question: string;
  score: number;
  weight: number;
  category: string;
  positive: boolean;
}

export interface ICategoryAnswer {
  score: number;
  weight: number;
}

export interface ICategoryResult {
  categoryName: string;
  categoryAverage: number;
}

interface IUser {
  uid: string;
  displayName: string;
}

export interface IResult {
  categoryResults: ICategoryResult[];
  overallResult: number;
  date: Date;
  user: IUser;
}

@Injectable({
  providedIn: 'root'
})

export class QuestionnaireService {
  user;

  constructor(private authService: AuthService) {
    this.user = authService.user;
   }

  getResults(questionArray: IQuestion[]): IResult {
    const categoryAverages: ICategoryResult[] = this.getCategoryAverages(questionArray);
    const overallAverage: number = this.getOverallAverage(categoryAverages);
    const addDate = new Date();
    const userObject: IUser = this.createUserObject();
    const result: IResult = this.formatResults(categoryAverages, overallAverage, addDate, userObject);
    return result;
  }

  createUserObject(): IUser {
    console.log('The user is ' + this.user.displayName);
    const currentUser: IUser = {
      uid: this.user.uid,
      displayName: this.user.displayName
    };
    return currentUser;
  }

  getCategoryAverages(questionArray: IQuestion[]): ICategoryResult[] {
    const positiveAnswers: IQuestion[] = this.makePositive(questionArray);
    const foundCategories: string[] = this.getCategories(positiveAnswers);
    let categoryAverages: ICategoryResult[] = [];
    for (const category of foundCategories) {
      let sameCategoryArray: ICategoryAnswer[] = [];
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

  createCategoryObjects(questionArray: IQuestion[], category: string, sameCategoryArray: ICategoryAnswer[]): ICategoryAnswer[] {
    for (const question of questionArray) {
      if (question.category === category) {
        const categoryObject: ICategoryAnswer = this.createSingleCategoryObject(question);
        sameCategoryArray.push(categoryObject);
      }
    }
    return sameCategoryArray;
  }

  createSingleCategoryObject(question: IQuestion): ICategoryAnswer {
    const categoryObject: ICategoryAnswer = {
      score: question.score,
      weight: question.weight
    };
    return categoryObject;
  }

  calculateWeightedAverage(sameCategoryArray: ICategoryAnswer[]): number {
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

  formatResults(catAv: ICategoryResult[], overallAv: number, addDate, userObj: IUser): IResult {
    const result: IResult = {
      categoryResults: catAv,
      overallResult: overallAv,
      date: addDate,
      user: userObj
    };
    return result;
  }

}

@Injectable({
  providedIn: 'root'
})

export class Randomise {

  constructor() { }

  randomiseOrder(questionArray: IQuestion[]): IQuestion[] {
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

@Injectable({
  providedIn: 'root'
})

export class FirebaseForQuestionnaire {
  questionnaireCollection: AngularFirestoreCollection<IResult>;
  questionnaire: Observable<IResult[]>;
  questionsCollection: AngularFirestoreCollection<IQuestion>;

  constructor(private afs: AngularFirestore) {
    this.questionnaireCollection = this.afs.collection('questionnaires');
    this.questionsCollection = this.afs.collection('questions');

    this.questionnaire = this.questionnaireCollection.snapshotChanges()
      .pipe(map(this.includeCollectionID));
    }

   includeCollectionID(docChangeAction) {
    return docChangeAction.map((a) => {
      const data = a.payload.doc.data();
      const id = a.payload.doc.id;
      return { id, ...data };
    });
  }

  import(data) {
    for (const item of data) {
      this.questionsCollection.add(item).then(() => {
        console.log('Added: ' + item.question);
      });
    }
  }

  restructureDocsInCollection(collectionSnapshot) {
      const docArray = [];
      collectionSnapshot.forEach((doc) => {
        docArray.push(
          { ...doc.data() }
        );
      });
      return docArray;
  }

  getAllQuestions() {
    return this.questionsCollection.get().pipe(
      map(this.restructureDocsInCollection));
  }

  getAllResults() {
    return this.questionnaireCollection.get().pipe( // score
      map(this.restructureDocsInCollection));
       }

  getRecent(user, numberOfResults = 1) {
    const resultCollection = this.afs.collection<IResult>('questionnaires', (reference) => {
      return reference
        .orderBy('date', 'desc')
        .where('user.uid', '==', user.uid)
        .limit(numberOfResults);
    });
    return resultCollection.get().pipe(map(this.restructureDocsInCollection));
  }

  upload(questionnaireObject) {
    return this.questionnaireCollection.add(questionnaireObject);
  }

}
