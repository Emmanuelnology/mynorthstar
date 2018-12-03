import { Component, OnInit, Input } from '@angular/core';
import { IData, IRadarChartOptions, IChartDataSet } from '../star/star.component';

export interface IStarData {
  datasets: number[][];
  labels: string[]
};

@Component({
  selector: 'app-main-star',
  templateUrl: './main-star.component.html',
  styleUrls: ['./main-star.component.scss']
})
export class MainStarComponent implements OnInit {
  @Input() allStarData: IStarData;
  @Input() showLabels: boolean = true;
  
  colors = ['white', 'red', 'blue', 'green'];
  
  outputData: IData = {
    datasets: [],
    labels: [],
    options:  {
      tooltips: {
        backgroundColor: 'rgba(	176, 32, 98, 0.7)'
      },
      legend: {
        display: false
      },
      scale: {
        pointLabels: {
          fontFamily: 'nunito',
          display: true,
          fontColor: 'white',
          fontSize: 14
        },
        angleLines: {
          color: '#b02062'
        },
        ticks: {
          fontFamily: 'nunito',
          maxTicksLimit: 5,
          display: false,
          min: 0,
          max: 10,
        },
        gridLines: {
          color: '#777'
        }
      }
    }
  };
  
  ngOnInit() {

    this.outputData.options.scale.pointLabels.display = this.showLabels;

    this.outputData.labels = this.allStarData.labels;

    for (const dataIndex in this.allStarData.datasets){
      let dataset = {
        data: this.allStarData.datasets[dataIndex],
        label: '',
        fill: false,
        lineTension: 0.3,
        borderColor: this.colors[dataIndex],
        pointBorderColor: 'white',
        pointRadius: 3,
        pointBackgroundColor: 'white'
      }
      this.outputData.datasets.push(dataset);
    }
    
  }
  
}
