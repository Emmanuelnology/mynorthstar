import { Component, Input, AfterViewInit, ChangeDetectorRef, OnInit, HostListener } from '@angular/core';
import { Chart } from 'chart.js';


interface ICanvas extends HTMLElement {
  getContext(context: string);
}

export interface IRadarChartOptions {
  tooltips?: {
    backgroundColor: string | string []
  };
  legend: {
    display: boolean,
    labels?: {
      fontColor?: string
    }
  };
  scale: {
    pointLabels: { // Labels around the chart
      fontFamily?: string,
      display: boolean,
      fontColor: string,
      fontSize: number
    },
    angleLines: { // Radiating lines leading to the labels
      color: string
    },
    ticks: {
      fontFamily?: string,
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

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})

export class StarComponent implements AfterViewInit, OnInit {
  @Input() data: IData;
  @Input() size = '100%';

  chart: Chart = {} as Chart;
  canvasID: string;
  gradientColors: string[] =  ['rgb(255,0,110)', 'rgb(112,49,238)', 'rgb(18,148,194)', 'rgb(0,255,213)'];

  constructor(private cd: ChangeDetectorRef) {
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

  createRadarPointColors(data) {
    const dataSetColors = [];
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (data[key] < 2) {
          dataSetColors[key] = this.gradientColors[0];
        } else if (data[key] < 4) {
          dataSetColors[key] = this.gradientColors[1];
        } else if (data[key] < 8) {
          dataSetColors[key] = this.gradientColors[2];
        } else  {
          dataSetColors[key] = this.gradientColors[3];
        }
      }
    }
    return dataSetColors;

  }

  createGradient(ctx, parentElement) {
    const width =  parentElement.offsetWidth;
    const height =  width*0.5;
    console.log(height);
    const gradient = ctx.createRadialGradient(

      width / 2,
      height / 2,
      20,
      width / 2,
      height / 2,
      width / 2);
    gradient.addColorStop(0, this.gradientColors[0]);
    gradient.addColorStop(0.11, this.gradientColors[1]);
    gradient.addColorStop(0.4, this.gradientColors[2]);
    gradient.addColorStop(0.6, this.gradientColors[3]);
    return gradient;
  }

  createChart() {

    const element = document.getElementById(this.canvasID);
    const parentElement = document.getElementById(this.canvasID + '-parent');

    const canvas: ICanvas = (element as ICanvas);
    const ctx = canvas.getContext('2d');

    if (this.data.datasets.length === 1) {
      const gradient = this.createGradient(ctx, parentElement);
      const pointColors = this.createRadarPointColors(this.data.datasets[0].data);
      this.data.datasets[0].borderColor = gradient;
      this.data.datasets[0].pointBackgroundColor = pointColors;
    }
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
  }

  ngOnInit () {
    this.makeStarUnique();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.redraw();
  }


}
