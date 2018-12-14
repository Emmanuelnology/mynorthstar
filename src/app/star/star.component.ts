import { Component, Input, AfterViewInit, ChangeDetectorRef, OnInit, HostListener } from '@angular/core';
import { Chart, ChartLegendLabelItem, ChartData } from 'chart.js';
import { analyzeAndValidateNgModules } from '@angular/compiler';

enum Colors {
  Red = 'rgb(255,0,110)',
  Purple = 'rgb(112,49,238)',
  Blue = 'rgb(18,148,194)',
  Turquoise = 'rgb(0,255,213)'
}

interface IGradientData {
  canvas: CanvasRenderingContext2D;
  width: number;
  stopPoints: number[];
  colors: typeof Colors;
  labelBreakpoint: number;
}

class Gradient {
  private width: number;
  private y: number;
  smallRadius: number;
  bigRadius: number;
  private breakpoint: number;

  constructor(private data: IGradientData) {
    this.width = data.width;
    this.y = this.width / 2;
    this.smallRadius = 0.05;
    this.bigRadius = 0.45;
    this.breakpoint = this.data.labelBreakpoint;
  }

  private hasLabels() {
    return (window.innerWidth > this.breakpoint);
  }

  private get x() {
    return (this.hasLabels()) ? this.y + 35 : this.y;
  }

  private modifyWidthForLabels(width) {
    return (this.hasLabels()) ? width - 155 : width;
  }

  private get innerRadius() {
    // 155 only works for the labels in the order that they are currently in
    const width = this.modifyWidthForLabels(this.width);
    return width * this.smallRadius;
  }

  private get outerRadius() {
    const width = this.modifyWidthForLabels(this.width);
    return width * this.bigRadius;
  }

  create() {
    const canvasGradient = this.data.canvas.createRadialGradient(
      this.x,
      this.y,
      this.innerRadius,
      this.x,
      this.y,
      this.outerRadius
      );
    canvasGradient.addColorStop(this.data.stopPoints[0], this.data.colors.Red);
    canvasGradient.addColorStop(this.data.stopPoints[1], this.data.colors.Purple);
    canvasGradient.addColorStop(this.data.stopPoints[2], this.data.colors.Blue);
    canvasGradient.addColorStop(this.data.stopPoints[3], this.data.colors.Turquoise);
    return canvasGradient;
  }

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
  borderColor: string | CanvasGradient;
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
  @Input() breakpoint = 768;

  breakpoints: number[];
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

  // createRadarPointColors(data) {
  //   const dataSetColors = [];
  //   for (const key in data) {
  //     if (data.hasOwnProperty(key)) {
  //       if (data[key] < 2) {
  //         dataSetColors[key] = Colors.Red;
  //       } else if (data[key] < 5) {
  //         dataSetColors[key] = Colors.Purple;
  //       } else if (data[key] < 8) {
  //         dataSetColors[key] = Colors.Blue;
  //       } else  {
  //         dataSetColors[key] = Colors.Turquoise;
  //       }
  //     }
  //   }
  //   return dataSetColors;

  // }

  // createGradient(ctx, parentElement) {
  //   const width =  parentElement.offsetWidth;
  //   const middle = width / 2;
  //   const gradient = ctx.createRadialGradient(
  //     middle,
  //     middle,
  //     30,
  //     middle,
  //     middle,
  //     middle * 0.8 );
  //     console.log(width);
  //   gradient.addColorStop(0, Colors.Red);
  //   gradient.addColorStop(0.3, Colors.Purple);
  //   gradient.addColorStop(0.7, Colors.Blue);
  //   gradient.addColorStop(1, Colors.Turquoise);
  //   return gradient;
  // }

  createRGB(red, green, blue) {
    const newRed = Math.floor(red);
    const newGreen = Math.floor(green);
    const newBlue = Math.floor(blue);
    return 'rgb(' + newRed + ',' + newGreen + ',' + newBlue + ')';
  }

  rgbLinearFunctions(score, lowerScoreBound, upperScoreBound, startRed, startGreen, startBlue, endRed, endGreen, endBlue) {
    const translatedScore = upperScoreBound - score;
    const range = upperScoreBound - lowerScoreBound;
    const red = (startRed - endRed) / (range) * translatedScore + endRed;
    const green = (startGreen - endGreen) / (range) * translatedScore + endGreen;
    const blue = (startBlue - endBlue) / (range) * translatedScore + endBlue;
    return this.createRGB(red, green, blue);
  }

  createRadarPointColors(data) {
    const dataSetColors = [];
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (data[key] < this.breakpoints[0]) {
          dataSetColors[key] = Colors.Red;
        } else if (data[key] < this.breakpoints[1]) {
          dataSetColors[key] = this.rgbLinearFunctions(data[key], this.breakpoints[0], this.breakpoints[1], 255, 0, 110, 112, 49, 238);
        } else if (data[key] < this.breakpoints[2]) {
          dataSetColors[key] = this.rgbLinearFunctions(data[key], this.breakpoints[1], this.breakpoints[2], 112, 49, 238, 18, 148, 194);
        } else if (data[key] < this.breakpoints[3]) {
          dataSetColors[key] = this.rgbLinearFunctions(data[key], this.breakpoints[2], this.breakpoints[3], 18, 148, 194, 0, 255, 213);
        } else  {
          dataSetColors[key] = Colors.Turquoise;
        }
      }
    }
    return dataSetColors;
  }

  createBreakpoints(smallRadius, bigRadius, gradientStopPoints) {
    const breakpoints: number[] = [];
    for (const point in gradientStopPoints) {
      if (gradientStopPoints.hasOwnProperty(point)) {
        breakpoints.push(
          20 * (smallRadius + (bigRadius - smallRadius) * gradientStopPoints[point])
        );
      }
    }
    return breakpoints;

  }

  createGradient(gradientData: IGradientData) {
      const gradient = new Gradient( gradientData );
      this.breakpoints = this.createBreakpoints(gradient.smallRadius, gradient.bigRadius, gradientData.stopPoints);
      return gradient.create();
  }

  overrideGradient() {
    const parentElement = document.getElementById(this.canvasID + '-parent');
      const gradient = this.createGradient(
        {
          canvas: this.ctx,
          width: parentElement.offsetWidth,
          stopPoints: [0, 0.31, 0.69, 1],
          labelBreakpoint: this.breakpoint,
          colors: Colors
        });
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
    if (window.innerWidth > this.breakpoint) {
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


