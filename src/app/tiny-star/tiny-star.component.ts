import { Component, OnInit, Input } from '@angular/core';
import {IData} from '../star/star.component';
@Component({
  selector: 'app-tiny-star',
  templateUrl: './tiny-star.component.html',
  styleUrls: ['./tiny-star.component.scss']
})

export class TinyStarComponent implements OnInit {
@Input() starData: number[] = [];
@Input() size: string;
payload: IData = {
  datasets : [{
    data: [],
    label: 'Me',
    fill: true,
    backgroundColor: 'white',
    lineTension: 0.3,
    borderColor: 'white',
    pointBorderColor: 'white',
    pointRadius: 0,
    pointBackgroundColor: 'white',
  }],
  labels: [],
  options: {
    aspectRatio: 1,
    animation:  {duration: 0 },
    legend: {
      display: false
    },
    scale: {
      pointLabels: {
        display: false,
        fontColor: 'white',
        fontSize: 14
      },
      angleLines: {
        color: 'rgba(0, 0, 0, 0)'
      },
      ticks: {
        display: false,
        min: 0,
        max: 10,
      },
      gridLines: {
        color: 'rgba(0, 0, 0, 0)'
      }
    }
  }
};




  ngOnInit() {
      this.payload.datasets[0].data = this.starData;
      for (const d of this.starData) {
        this.payload.labels.push(d.toString());
      }
      console.log(this.payload, 'payload');
    }



}
