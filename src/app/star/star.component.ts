import { Component, OnInit, Input } from '@angular/core';
import {  IResult } from '../services/questionnaire.service';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  @Input() results: IResult[];
  
  public radarChartLabels:string[] = [];
  public radarChartOptions = {
    scale: {
      ticks: {
        display: false,
      },
      gridlines: {
        color:'white'
      }
    },  };
    public radarChartData:any = [];
    
    public radarChartType:string = 'radar';
    
    // events
    public chartClicked(e:any):void {
      console.log(e);
    }
    
    public chartHovered(e:any):void {
      console.log(e);
    }
    
    constructor() {
     
    
    }
    
    ngOnInit() {
      console.log(this.results);
      let categories:string[]=[];
      let data:number[]=[];
      for (let result of this.results){
        categories.push(result.category);
        data.push(result.categoryAverage);
      }
      this.radarChartData=[
        {
          data: data, 
          label: 'A date',
          fill:false,
          lineTension:0.3,
          pointBackgroundColor:'white'
        }
      ];
      this.radarChartLabels=categories;
    }
  }
  