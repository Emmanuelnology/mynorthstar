import { Component, OnInit } from '@angular/core';
import { IResult, QuestionnaireService, exampleQuestions } from '../services/questionnaire.service';
import { IData } from '../star/star.component';

@Component({
  selector: 'app-my-star',
  templateUrl: './my-star.component.html',
  styleUrls: ['./my-star.component.scss']
})
export class MyStarComponent implements OnInit {
  questions = exampleQuestions;
  results: IResult;
  overallResult: number;
  starData: IData = {
    datasets: [],
    labels: [],
    options: {
      legend: {
        display: false
      },
      scale: {
        pointLabels: {
          display: true,
          fontColor: 'white',
          fontSize: 14
        },
        angleLines: {
          color: '#b02062'
        },
        ticks: {
          display: false,
          min: 0,
          max: 10,
        },
        gridLines: {
          color: '#777'
        }
      }
    }
  };

  constructor(private questionnaireService: QuestionnaireService) {
    this.results = this.questionnaireService.getResults(this.questions);
    this.overallResult = this.results.overallResult;

    const restructuredData = this.restructureData(this.results.categoryResults);
    this.starData.datasets = restructuredData.datasets;
    this.starData.labels = restructuredData.labels;
  }

  restructureData(results) {
    const categories: string[] = [];
    const data: number[] = [];
    for (const result of results) {
      categories.push(result.category);
      data.push(result.categoryAverage);
    }
    return {
      datasets: [
        {
          data: data,
          label: '',
          fill: false,
          lineTension: 0.3,
          borderColor: 'white',
          pointBorderColor: '#6ecbd3',
          pointRadius: 5,
          pointBackgroundColor: '#37234f'
        }
      ],
      labels: categories
    };

  }

  ngOnInit() {
  }

}
