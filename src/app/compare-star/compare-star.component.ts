import { Component, OnInit } from '@angular/core';
import {IData} from '../star/star.component';

@Component({
  selector: 'app-compare-star',
  templateUrl: './compare-star.component.html',
  styleUrls: ['./compare-star.component.scss']
})

export class CompareStarComponent implements OnInit {
  data:IData={
    datasets:  [{
      data: [1,2,3],
    label: "Current",
    fill: false,
    lineTension: 0.3,
    borderColor: 'white',
    pointBorderColor: '#6ecbd3',
    pointRadius: 5,
    pointBackgroundColor: '#37234f',
  }],
  labels: ['A', 'B', 'C'],
  options: {
    legend: {
      display: true
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
        display: false,
        min: 0,
        max: 10,
      },
      gridLines: {
        color: '#777'
      }
    },
  }

}
  constructor() { }

  ngOnInit() {
  }

}
