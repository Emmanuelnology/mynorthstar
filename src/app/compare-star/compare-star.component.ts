import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MainStarComponent, IDataSet } from '../main-star/main-star.component';

// import { renderDetachView } from '@angular/core/src/view/view_attach';
// import { viewAttached } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-compare-star',
  templateUrl: './compare-star.component.html',
  styleUrls: ['./compare-star.component.scss']
})

export class CompareStarComponent implements OnInit, AfterViewInit {

  @ViewChild(MainStarComponent) mainStarViewChild: MainStarComponent;

  data = {
    datasets: [],
    labels: ['Career', 'Friends & Family', 'Happiness',
    'Health & Wellbeing', 'Home & Environment', 'Money',
    'Personal Growth', 'Relationships', 'Spirituality']
  };

  public pastData: IDataSet[] = [
    {label: 'Nov 18', data: [9, 2, 8, 3, 9, 2, 8, 4, 2]},
    {label: 'Oct 18', data: [1, 6, 4, 3, 8, 6, 3, 2, 6]},
    {label: 'Sep 18', data: [3, 7, 8, 4, 6, 4, 3, 2, 5]},
    {label: 'Aug 18', data: [3, 6, 6, 7, 4, 8, 3, 6, 3]},
    {label: 'Jul 18', data: [4, 5, 2, 7, 6, 4, 8, 3, 3]}
  ];

  constructor() {
    this.data.datasets.push(
      {label: 'Current', data: [1, 6, 2, 6, 1, 5, 2, 7, 9]}
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
    this.data.datasets = [
      {label: 'Current', data: [1, 6, 2, 6, 1, 5, 2, 7, 9]},
      {label: 'remove', data: []},
      {label: 'remove', data: []},
      {label: 'remove', data: []},
      {label: 'remove', data: []},
      {label: 'remove', data: []}
    ];
  }

  addData(activeIndex: number[]) {
    this.removeData();
    for (const index of activeIndex) {
      this.data.datasets[index + 1] = this.pastData[index];
    }
    this.mainStarViewChild.starData = this.data.datasets;
    console.log(this.mainStarViewChild.starData);
    this.redraw();
  }
}
