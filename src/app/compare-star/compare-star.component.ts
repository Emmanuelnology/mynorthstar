import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IData, IChartDataSet, StarComponent } from '../star/star.component';

// import { renderDetachView } from '@angular/core/src/view/view_attach';
// import { viewAttached } from '@angular/core/src/render3/instructions';
import { HistoryComponent } from '../history/history.component';
import { Colours } from '../../colours';

@Component({
  selector: 'app-compare-star',
  templateUrl: './compare-star.component.html',
  styleUrls: ['./compare-star.component.scss']
})

export class CompareStarComponent implements OnInit, AfterViewInit {

  @ViewChild(StarComponent) starViewChild: StarComponent;
  @ViewChild(HistoryComponent) historyViewChild: HistoryComponent;

  public colours: Colours;

  datasets: IChartDataSet[] = [];
  data: IData = {
    datasets: [],
    labels: ['Career', 'Friends & Family', 'Happiness',
      'Health & Wellbeing', 'Home & Environment', 'Money',
      'Personal Growth', 'Relationships', 'Spirituality'],
    options: {
      legend: {
        display: true,
        labels: {
          fontColor: 'white'
        }
      },
      scale: {
        pointLabels: { // Labels around the chart
          display: true,
          fontColor: 'white',
          fontSize: 14
        },
        angleLines: { // Radiating lines leading to the labels
          color: '#b02062'
        },
        ticks: {
          // maxTicksLimit: 5,
          display: false,
          min: 0,
          max: 10,
        },
        gridLines: {
          color: '#777'
        }
      },
    }
  };

  public pastData = [
    {
      data: [9, 2, 8, 3, 9, 2, 8, 4, 2],
      label: 'Nov 18',
      fill: false,
      lineTension: 0.3,
      borderColor: '#b02062',
      pointBorderColor: '#6ecbd3',
      pointRadius: 5,
      pointBackgroundColor: '#37234f'
    },
    {
      data: [1, 6, 4, 3, 8, 6, 3, 2, 6],
      label: 'Oct 18',
      fill: false,
      lineTension: 0.3,
      borderColor: '#6ecbd3',
      pointBorderColor: '#6ecbd3',
      pointRadius: 5,
      pointBackgroundColor: '#37234f'
    },
    {
      data: [3, 7, 8, 4, 6, 4, 3, 2, 5],
      label: 'Sep 18',
      fill: false,
      lineTension: 0.3,
      borderColor: '#65449b',
      pointBorderColor: '#6ecbd3',
      pointRadius: 5,
      pointBackgroundColor: '#37234f'
    },
    {
      data: [3, 6, 6, 7, 4, 8, 3, 6, 3],
      label: 'Aug 18',
      fill: false,
      lineTension: 0.3,
      borderColor: '#00ffd2',
      pointBorderColor: '#6ecbd3',
      pointRadius: 5,
      pointBackgroundColor: '#37234f'
    }
  ];

  constructor() {
    this.data.datasets.push(
      {
        data: [1, 6, 2, 6, 1, 5, 2, 7, 9],
        label: 'Current',
        fill: true,
        lineTension: 0.3,
        borderColor: 'white',
        pointBorderColor: '#6ecbd3',
        pointRadius: 5,
        pointBackgroundColor: '#37234f',
      }
    );
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  redraw() {
    this.starViewChild.redraw();
  }

  removeData() {
    this.data.datasets.splice(1);
    this.redraw();
  }

  // addData() {
  //   this.removeData();
  //   const activeStates = this.historyViewChild.findActive();
  //   for (const state of activeStates) {
  //     this.data.datasets.push(
  //       this.pastData[state]
  //     );
  //   }
  //   this.starViewChild.data.datasets = this.data.datasets;
  //   this.redraw();
  // }

  addData(activeIndex: number[]) {
    this.removeData();
    for (const index of activeIndex) {
      this.data.datasets.push(
        this.pastData[index]
      );
    }
    this.starViewChild.data.datasets = this.data.datasets;
    this.redraw();
  }
}
