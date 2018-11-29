import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {IData, IChartDataSet, StarComponent} from '../star/star.component';
import { renderDetachView } from '@angular/core/src/view/view_attach';

@Component({
  selector: 'app-compare-star',
  templateUrl: './compare-star.component.html',
  styleUrls: ['./compare-star.component.scss']
})


export class CompareStarComponent implements OnInit,  AfterViewInit {

  @ViewChild(StarComponent) starViewChild: StarComponent;

  datasets: IChartDataSet[] = [];
  data: IData = {
    datasets: [],
    labels: ['Happiness', 'Money', 'Romance and relationships', 'D', 'E', 'F', 'G', 'H'],
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
  constructor() {
    this.data.datasets.push(
      {
        data: [1, 6, 2, 6, 1, 5, 2, 7],
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

    addData() {
      this.data.datasets.splice(1);
      this.data.datasets.push(
        {
          data: [9, 2, 8, 3, 9, 2, 8, 4],
          label: 'old',
          fill: false,
          lineTension: 0.3,
          borderColor: 'pink',
          pointBorderColor: '#6ecbd3',
          pointRadius: 5,
          pointBackgroundColor: '#37234f'
        }
      );
      this.starViewChild.data.datasets = this.data.datasets;
      this.starViewChild.redraw();
    }
}
