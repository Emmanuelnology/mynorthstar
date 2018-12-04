import { Component, OnInit, Input, ViewChild, AfterViewInit  } from '@angular/core';
import { IData, StarComponent } from '../star/star.component';

@Component({
  selector: 'app-main-star',
  templateUrl: './main-star.component.html',
  styleUrls: ['./main-star.component.scss']
})
export class MainStarComponent implements OnInit, AfterViewInit {
  @Input() starData: number[][]; // added
  @Input() starLabels: string []; // added

  @ViewChild(StarComponent) starViewChild: StarComponent;

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
          color: 'rgba(33,64,103)'
        },
        ticks: {
          fontFamily: 'nunito',
          maxTicksLimit: 5,
          display: false,
          min: 0,
          max: 10,
        },
        gridLines: {
          color: 'rgba(33,64,103)'
        }
      }
    }
  };

  ngOnInit() {

    this.outputData.labels = this.starLabels;

    for (const dataIndex in this.starData) {
      if (this.starData.hasOwnProperty(dataIndex)) {
      const dataset = {
        data: this.starData[dataIndex],
        label: '',
        fill: false,
        lineTension: 0.3,
        borderColor: this.colors[dataIndex],
        borderWidth: 2,
        pointBorderColor: 'white',
        pointRadius: 3,
        pointBackgroundColor: 'white'
      };
      this.outputData.datasets.push(dataset);
    }}


  }

  ngAfterViewInit() {
  }

  removeData() {
    this.outputData.datasets.splice(0);
  }

  redraw() {
    this.removeData();
    for (const dataIndex in this.starData) {
      if (this.starData.hasOwnProperty(dataIndex)) {
      const dataset = {
        data: this.starData[dataIndex],
        label: '',
        fill: false,
        lineTension: 0.3,
        borderColor: this.colors[dataIndex],
        pointBorderColor: 'white',
        pointRadius: 3,
        pointBackgroundColor: 'white'
      };
      this.outputData.datasets.push(dataset);
    }}

    this.starViewChild.redraw();
  }

}
