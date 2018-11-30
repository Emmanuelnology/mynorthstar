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
  borderWidth?: number;
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
  @Input() size = 600;

  chart: Chart = {} as Chart;
  canvasID: string;

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

  createChart() {

    const colors = ['rgb(255,0,110)', 'rgb(112,49,238)', 'rgb(18,148,194)', 'rgb(0,255,213)'];

    const data: number[] = this.data.datasets[0].data;
    const dataSetColors: string[] = [];
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        console.log(data[key]);
        if (data[key] < 2) {
          dataSetColors[key] = colors[0];
        } else if (data[key] < 4) {
          dataSetColors[key] = colors[1];
        } else if (data[key] < 8) {
          dataSetColors[key] = colors[2];
        } else  {
          dataSetColors[key] = colors[3];
        }
        console.log(dataSetColors);

      }
    }
    this.data.datasets[0].pointBackgroundColor = dataSetColors;


    const canvas: ICanvas = (document.getElementById(this.canvasID) as ICanvas);
    const ctx = canvas.getContext('2d');
    const size: number = this.size;
    const gradient = ctx.createRadialGradient(size / 2, size / 2, 20, size / 2, size / 2, size);
    gradient.addColorStop(0, colors[0]);
    gradient.addColorStop(0.1, colors[1]);
    gradient.addColorStop(0.22, colors[2]);
    gradient.addColorStop(0.3, colors[3]);
    this.data.options.scale.gridLines.color = 'rgba(33,64,103)';
    this.data.options.scale.angleLines.color = 'rgba(33,64,103)';
    this.data.datasets[0].borderColor = gradient;
    this.data.datasets[0].borderWidth = 2;
    this.data.datasets[0].pointBorderColor = 'transparent';
    this.data.datasets[0].fill = true;
    this.data.datasets[0].backgroundColor = 'rgba(200,200,200,0.2)';
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
