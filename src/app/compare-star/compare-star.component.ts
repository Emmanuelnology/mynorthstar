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

  currentData = {label: 'Current', data: [3, 9, 6, 8, 3, 9, 4, 9, 5]};
  emptyData = {label: 'remove', data: []};
  animation = 0;

  data = {
    datasets: [],
    labels: ['Career', 'Friends & Family', 'Happiness',
    'Health & Wellbeing', 'Home & Environment', 'Money',
    'Personal Growth', 'Relationships', 'Spirituality']
  };

  public pastData: IDataSet[] = [
    {label: 'Nov 18', data: [2, 7, 5, 6, 3, 8, 3, 7, 3]},
    {label: 'Oct 18', data: [1, 6, 4, 5, 2, 7, 3, 6, 2]},
    {label: 'Sep 18', data: [2, 5, 3, 4, 1, 6, 2, 5, 2]},
    {label: 'Aug 18', data: [1, 4, 2, 3, 2, 5, 1, 3, 2]},
    {label: 'Jul 18', data: [1, 4, 1, 3, 1, 4, 1, 3, 1]}
  ];

  constructor() {
    this.data.datasets.push(
      this.currentData
    );
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  redraw() {
    this.mainStarViewChild.redraw();
  }

  editData() {
    this.data.datasets = [
      this.currentData,
      this.emptyData,
      this.emptyData,
      this.emptyData,
      this.emptyData,
      this.emptyData
    ];
  }

  addRemoveData(activeIndex: number[]) {
    this.editData();
    for (const index of activeIndex) {
      this.data.datasets[index + 1] = this.pastData[index];
    }
    this.mainStarViewChild.starData = this.data.datasets;
    console.log(this.mainStarViewChild.starData);
    this.redraw();
  }
}
