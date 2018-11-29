import { Component, OnInit, Input } from '@angular/core';
import {IData} from '../star/star.component';
@Component({
  selector: 'app-tiny-star',
  templateUrl: './tiny-star.component.html',
  styleUrls: ['./tiny-star.component.scss']
})

export class TinyStarComponent implements OnInit {
@Input() data: number[];
payload = {
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
    this.payload.datasets[0].data = this.data;
    for (const d of this.data) {
      this.payload.labels.push(d);
    }
  }

}
