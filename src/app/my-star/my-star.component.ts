import { Component, OnInit } from '@angular/core';
import { IResult, QuestionnaireService, exampleQuestions } from '../services/questionnaire.service';
import { IStarData} from '../main-star/main-star.component';



@Component({
  selector: 'app-my-star',
  templateUrl: './my-star.component.html',
  styleUrls: ['./my-star.component.scss']
})
export class MyStarComponent implements OnInit {
  questions = exampleQuestions;
  results: IResult;
  overallResult: number;

    data: IStarData = {
    datasets: [],
    labels: [],
  };

  constructor(private questionnaireService: QuestionnaireService) {
    this.results = this.questionnaireService.getResults(this.questions);
    this.overallResult = this.results.overallResult;

    this.data = this.restructureData(this.results.categoryResults);

  }

  restructureData(results): IStarData {
    const categories: string[] = [];
    const data: number[] = [];
    for (const result of results) {
      categories.push(result.categoryName);
      data.push(Math.round(result.categoryAverage * 100) / 100);
    }
    return {
      datasets: [data],
      labels: categories
    };

  }

  ngOnInit() {
  }

}
