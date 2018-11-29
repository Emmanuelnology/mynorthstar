import { Component, OnInit } from '@angular/core';
import {IData} from '../star/star.component';

@Component({
  selector: 'app-style-guide',
  templateUrl: './style-guide.component.html',
  styleUrls: ['./style-guide.component.scss']
})
export class StyleGuideComponent implements OnInit {
  starData = [10, 2, 9];
  constructor() {

   }

  ngOnInit() {
  }

}
