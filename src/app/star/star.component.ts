import { Component, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Chart } from 'chart.js';


interface ICanvas extends HTMLElement {
  getContext(context: string);
}

export interface IRadarChartOptions {
  legend: {
    display: boolean
  };
  scale: {
    pointLabels: { // Labels around the chart
      display: boolean,
      fontColor: string,
      fontSize: number
    },
    angleLines: { // Radiating lines leading to the labels
      color: string
    },
    ticks: {
      display: boolean,
      min: number,
      max: number,
    },
    gridLines: {
      color: string
    }
  };
}

interface IChartDataSet {
  data: number[];
  label: string;
  fill: boolean;
  lineTension: number;
  borderColor: string;
  pointBorderColor: string;
  pointRadius: number;
  pointBackgroundColor: string | string[];
}

export interface IData {
  datasets: IChartDataSet[];
  labels: string[];
  options: IRadarChartOptions;
}

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})

export class StarComponent implements AfterViewInit {
  @Input() data: IData;
  chart = [];
canvasID;
  constructor(private cd: ChangeDetectorRef) {
    this.canvasID = this.getID();
  }

  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  getID() {
    return 'canvas' + this.guid();
  }

  createChart() {
      const canvas: ICanvas = (document.getElementById(this.canvasID) as ICanvas);
      const ctx = canvas.getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: this.data.labels,
          datasets: this.data.datasets,
        },
        options: this.data.options,
      });

    }

    ngAfterViewInit() {
      this.createChart();
      this.cd.detectChanges();
    }

  }


