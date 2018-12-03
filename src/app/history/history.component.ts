import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  @Output() checked = new EventEmitter <number[]>();

  public pastDataProfile = [
    {date: 'Nov 18', score: '6.35', isActive: false},
    {date: 'Oct 18', score: '5.11', isActive: false},
    {date: 'Sep 18', score: '4.21', isActive: false},
    {date: 'Aug 18', score: '4.00', isActive: false}
  ];

  public deactivate() {
    for (const index in this.pastDataProfile) {
      if (this.pastDataProfile.hasOwnProperty(index)) {
        this.pastDataProfile[index].isActive = false;
      }
    }
  }

  public findActive() {
    const activeIndex: number[] = [];
    for (const index in this.pastDataProfile) {
      if (this.pastDataProfile[index].isActive) {
        activeIndex.push(parseInt(index, 10));
      }
    }
    this.checked.emit(activeIndex);
  }

  constructor() { }

  ngOnInit() {
  }

}
