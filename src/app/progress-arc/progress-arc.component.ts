import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-arc',
  templateUrl: './progress-arc.component.html',
  styleUrls: ['./progress-arc.component.scss']
})
export class ProgressArcComponent implements OnInit {
    progress:number;
    barColor:string='red';
  constructor() { }

  ngOnInit() {
            this.progress=50;

  }

}
