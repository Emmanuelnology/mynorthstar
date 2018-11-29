import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  
  public pastData = [
    {date: 'Nov 18',
    score: '6.35'},
    {date: 'Oct 18',
    score: '5.11'},
    {date: 'Sep 18',
    score: '4.21'},
    {date: 'Aug 18',
    score: '4.00'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
  
