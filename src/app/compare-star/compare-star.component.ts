import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MainStarComponent } from '../main-star/main-star.component';

// import { renderDetachView } from '@angular/core/src/view/view_attach';
// import { viewAttached } from '@angular/core/src/render3/instructions';
import { Colours } from '../../colours';

@Component({
  selector: 'app-compare-star',
  templateUrl: './compare-star.component.html',
  styleUrls: ['./compare-star.component.scss']
})

export class CompareStarComponent implements OnInit, AfterViewInit {

  @ViewChild(MainStarComponent) mainStarViewChild: MainStarComponent;

  public colours: Colours;

  data = {
    datasets: [],
    labels: ['Career', 'Friends & Family', 'Happiness',
    'Health & Wellbeing', 'Home & Environment', 'Money',
    'Personal Growth', 'Relationships', 'Spirituality']
  };

  // trialdatasets: IChartDataSet[] = [];
  // trialdata: IData = {
  //   datasets: [],
  //   labels: ['Career', 'Friends & Family', 'Happiness',
  //     'Health & Wellbeing', 'Home & Environment', 'Money',
  //     'Personal Growth', 'Relationships', 'Spirituality'],
  //   options: {
  //     legend: {
  //       display: true,
  //       labels: {
  //         fontColor: 'white'
  //       }
  //     },
  //     scale: {
  //       pointLabels: { // Labels around the chart
  //         display: true,
  //         fontColor: 'white',
  //         fontSize: 14
  //       },
  //       angleLines: { // Radiating lines leading to the labels
  //         color: '#b02062'
  //       },
  //       ticks: {
  //         // maxTicksLimit: 5,
  //         display: false,
  //         min: 0,
  //         max: 10,
  //       },
  //       gridLines: {
  //         color: '#777'
  //       }
  //     },
  //   }
  // };

  public pastData = [
    // {
    //   data: [9, 2, 8, 3, 9, 2, 8, 4, 2],
    //   label: 'Nov 18',
    //   fill: false,
    //   lineTension: 0.3,
    //   borderColor: '#b02062',
    //   pointBorderColor: '#6ecbd3',
    //   pointRadius: 5,
    //   pointBackgroundColor: '#37234f'
    // }
    [9, 2, 8, 3, 9, 2, 8, 4, 2],
    [1, 6, 4, 3, 8, 6, 3, 2, 6],
    [3, 7, 8, 4, 6, 4, 3, 2, 5],
    [3, 6, 6, 7, 4, 8, 3, 6, 3]
  ];

  constructor() {
    // this.data.datasets.push(
    //   {
    //     data: [1, 6, 2, 6, 1, 5, 2, 7, 9],
    //     label: 'Current',
    //     fill: true,
    //     lineTension: 0.3,
    //     borderColor: 'white',
    //     pointBorderColor: '#6ecbd3',
    //     pointRadius: 5,
    //     pointBackgroundColor: '#37234f',
    //   }
    // );
    this.data.datasets.push(
      [1, 6, 2, 6, 1, 5, 2, 7, 9]
    );
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  redraw() {
    this.mainStarViewChild.redraw();
  }

  removeData() {
    this.data.datasets.splice(1);
  }

  addData(activeIndex: number[]) {
    this.removeData();
    for (const index of activeIndex) {
      this.data.datasets.push(
        this.pastData[index]
      );
    }
    this.mainStarViewChild.starData = this.data.datasets;
    console.log(this.mainStarViewChild.starData);
    this.redraw();
  }

}
