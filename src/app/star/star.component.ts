import { Component, Input, AfterViewInit, ChangeDetectorRef, HostListener } from '@angular/core';
import { Chart } from 'chart.js';


interface ICanvas extends HTMLElement {
  getContext(context: string);
}


export interface IRadarChartOptions {
  legend: {
    display: boolean,
    labels?: {
      fontColor?: string
    }
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
      maxTicksLimit?: number,
      display: boolean,
      min: number,
      max: number,
    },
    gridLines: {
      color: string
    }
  };
}

export interface IChartDataSet {
  data: number[];
  label: string;
  fill: boolean;
  backgroundColor?: string;
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

interface IChart {
  update();
}

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})

export class StarComponent implements AfterViewInit {
  @Input() data: IData;
  @Input() size = '100%';

  chart: Chart = {} as Chart;
  canvasID: string;

  constructor(private cd: ChangeDetectorRef) {
    this.makeStarUnique();
  }

  makeStarUnique() {
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

  redraw() {
    this.chart.update();
    console.log('Chart was updated');
  }

  ngAfterViewInit() {
    this.createChart();
    this.cd.detectChanges();
  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.redraw();
    }

}
