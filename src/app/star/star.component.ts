import { Component, OnInit, Input } from '@angular/core';
import {  IResult } from '../services/questionnaire.service';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  @Input() results:IResult[]=[];
  
  constructor() {
   }

  ngOnInit() {
  }

}
