import { Component, OnInit } from '@angular/core';
import { UploadToFirebase } from '../services/questionnaire.service';
import {data} from './data';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent implements OnInit {

  constructor(private service: UploadToFirebase) {
   }

  ngOnInit() {
  }

  import() {
    this.service.import(data);
  }

}
