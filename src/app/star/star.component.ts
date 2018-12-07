import { Component, Input, AfterViewInit, ChangeDetectorRef, OnInit, HostListener } from '@angular/core';
import { Chart, ChartLegendLabelItem, ChartData } from 'chart.js';

enum Colors {
  Red = 'rgb(255,0,110)',
  Purple = 'rgb(112,49,238)',
  Blue = 'rgb(18,148,194)',
  Turquoise = 'rgb(0,255,213)'
}

interface ICanvas extends HTMLElement {
  getContext(context: string);
}

export interface IRadarChartOptions {
  animation: {
    duration: number;
  };
  aspectRatio: number;
  tooltips?: {
    backgroundColor: string | string []
  };
  layout?: {
    padding: {
        left: number,
        right: number,
        top: number,
        bottom: number
    }
  };
  legend: {
    display: boolean,
    labels?: {
      fontColor?: string,
      filter?(legendItem: ChartLegendLabelItem, data: ChartData): any;
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

interface IChart extends Chart {
  options?;
  update();
}

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})

export class StarComponent implements AfterViewInit, OnInit {
  @Input() showLabels = true;
  @Input() data: IData;
  @Input() size = '100%';

  chart: IChart = {} as Chart;
  canvasID: string;
  ctx;
  canvas;
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
          dataSetColors[key] = Colors.Red;
        } else if (data[key] < 6) {
          dataSetColors[key] = Colors.Purple;
        } else if (data[key] < 9) {
          dataSetColors[key] = Colors.Blue;
        } else  {
          dataSetColors[key] = Colors.Turquoise;
        }
      }
    }
    return dataSetColors;

  }

  createGradient(ctx, parentElement) {
    const width =  parentElement.offsetWidth;
    const height =  width;
    const gradient = ctx.createRadialGradient(
      width / 2,
      height / 2,
      10,
      width / 2,
      height / 2,
      width / 1.5 );
      console.log(width);
    gradient.addColorStop(0, Colors.Red);
    gradient.addColorStop(0.3, Colors.Purple);
    gradient.addColorStop(0.7, Colors.Blue);
    gradient.addColorStop(1, Colors.Turquoise);
    return gradient;
  }

  overrideGradient() {
    const parentElement = document.getElementById(this.canvasID + '-parent');
      const gradient = this.createGradient(this.ctx, parentElement);
      const pointColors = this.createRadarPointColors(this.data.datasets[0].data);
      this.data.options.layout.padding.bottom = 0;
      this.data.options.layout.padding.top = 0;
      this.data.datasets[0].borderColor = gradient;
      this.data.datasets[0].pointBackgroundColor = pointColors;
      this.data.datasets[0].pointBorderColor = 'transparent';
      this.data.datasets[0].fill = true;
      this.data.datasets[0].backgroundColor = 'rgba(200,200,200,0.2)';
  }

  needsGradient() {
    return (this.data.datasets.length === 1);
  }

  createChart() {

    const element = document.getElementById(this.canvasID);
    this.canvas = (element as ICanvas);
    this.ctx = this.canvas.getContext('2d');

    if (this.needsGradient()) {
      this.overrideGradient();
    }

    this.chart = new Chart(this.ctx, {
      type: 'radar',
      data: {
        labels: this.data.labels,
        datasets: this.data.datasets,
      },
      options: this.data.options,
    });

  }

  redraw() {
    if (this.needsGradient()) {
      this.overrideGradient();
    }
    // No other way to change charts other than this. Maybe you can help?
    if (window.innerWidth > 768) {
      this.chart.options.layout.padding.bottom = 10;
      this.chart.options.scale.pointLabels.display = true;
    } else {
      this.chart.options.scale.pointLabels.display = false;
    }

    this.chart.update();
  }

  ngAfterViewInit() {
    this.createChart();
    this.redraw();
  }



  ngOnInit () {
    this.makeStarUnique();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.redraw();
  }


}
