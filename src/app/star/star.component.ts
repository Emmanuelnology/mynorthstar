import { Component, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import {  IResult } from '../services/questionnaire.service';
import { Chart } from 'chart.js';
import {ViewChild, ElementRef} from '@angular/core';

interface ICanvas extends HTMLElement {
  getContext(context:string)
}

interface IRadarChartOptions {
  legend: {
    display: boolean
  },
  scale: {
    pointLabels: { // Labels around the chart
      fontColor: string,
      fontSize: number
    },
    angleLines:{ //Radiating lines leading to the labels
      color:string
    },
    ticks: {
      display: boolean,
      min: number, 
      max: number,
    },
    gridLines: {
      color: string
    }
  }
}

interface IChartDataSetOptions {
  
  data: number[], 
  label: string,
  fill:boolean,
  lineTension:number,
  borderColor: string,
  pointBorderColor: string,
  pointRadius: number,
  pointBackgroundColor: string | string[]
  
}

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements AfterViewInit{
  @Input() results: IResult[];
  @ViewChild('radarChart') canvas: ElementRef;
  chart = []; 
  
  public radarChartLabels:string[] = [];
  public radarChartOptions:IRadarChartOptions = {
    legend: {
      display: false
    },
    scale: {
      
      pointLabels: {
        fontColor: 'white',
        fontSize: 14
      },
      angleLines:{
        color:'#b02062'
      },
      ticks: {
        display: false,
        min: 0,
        max: 10,
      },
      gridLines: {
        color:'#777'
      }
      
    },  };
    public radarChartData:IChartDataSetOptions[] = [];
    
    
    constructor(private cd: ChangeDetectorRef) {
      
      
    }
    
    createChart() {
      let canvas:ICanvas = (document.getElementById('canvas') as ICanvas);
      let ctx = canvas.getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: this.radarChartLabels,
          datasets: this.radarChartData
        },
        options: this.radarChartOptions
      });
      
    }
    
    restructureData(){
      let categories:string[]=[];
      let data:number[]=[];
      for (let result of this.results){
        categories.push(result.category);
        data.push(result.categoryAverage);
      }
      this.radarChartData=[
        {
          data: data, 
          label: '',
          fill:false,
          lineTension:0.3,
          borderColor: "white",
          pointBorderColor: "#6ecbd3",
          pointRadius: 5,
          pointBackgroundColor: "#37234f"
        }
      ];
      this.radarChartLabels=categories;
    }
    
    
    ngAfterViewInit() {
      this.restructureData();
      this.createChart();
      this.cd.detectChanges();
    }
    
  }
  
  