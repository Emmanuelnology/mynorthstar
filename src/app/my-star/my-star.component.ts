import { Component, OnInit } from '@angular/core';
import { IResult, QuestionnaireService, exampleQuestions } from '../services/questionnaire.service';
import { IData, IRadarChartOptions } from '../star/star.component';

@Component({
  selector: 'app-my-star',
  templateUrl: './my-star.component.html',
  styleUrls: ['./my-star.component.scss']
})
export class MyStarComponent implements OnInit {
  questions = exampleQuestions;
  results: IResult;
  overallResult: number;


  bigStarData: IData = {
    datasets: [],
    labels: [],
    options: {} as IRadarChartOptions
  };
  littleStarData: IData = {
    datasets: [],
    labels: [],
    options: {} as IRadarChartOptions
  };

  bigStarOptions = {
    responsive: false,
    tooltips: {
      backgroundColor: 'rgba(	13, 48, 99, 0.6)'
    },
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
        maxTicksLimit: 5,
        display: false,
        min: 0,
        max: 10,
      },
      gridLines: {
        color: '#777'
      }
    }
  };

  littleStarOptions = {
    tooltips: {
      backgroundColor: 'rgba(	13, 48, 99, 0.6)'
    },
    legend: {
      display: false
    },
    scale: {
      pointLabels: {
        display: false,
        fontColor: 'white',
        fontSize: 14
      },
      angleLines: {
        color: '#b02062'
      },
      ticks: {
        maxTicksLimit: 5,
        display: false,
        min: 0,
        max: 10,
      },
      gridLines: {
        color: '#777'
      }
    }
  };


  constructor(private questionnaireService: QuestionnaireService) {
    this.results = this.questionnaireService.getResults(this.questions);
    this.overallResult = this.results.overallResult;

    const restructuredData = this.restructureData(this.results.categoryResults);

    this.bigStarData.datasets = restructuredData.datasets;
    this.bigStarData.labels = restructuredData.labels;
    this.bigStarData.options = this.bigStarOptions;

    this.littleStarData.datasets = restructuredData.datasets;
    this.littleStarData.labels = restructuredData.labels;
    this.littleStarData.options = this.littleStarOptions;
  }



  restructureData(results) {
    const categories: string[] = [];
    const data: number[] = [];
    for (const result of results) {
      categories.push(result.category);
      data.push(Math.round(result.categoryAverage * 100) / 100);
    }
    return {
      datasets: [
        {
          data: data,
          label: '',
          fill: false,
          lineTension: 0.3,
          borderColor: 'white',
          pointBorderColor: 'white',
          pointRadius: 6,
          pointBackgroundColor: ['#37234f', '#003864', '#b02062', '#65449b',
           '#6ecbd3', '#1b2949', '#37234f', '#003864', '#b02062']
        }
      ],
      labels: categories
    };

  }

  ngOnInit() {
  }

}
