import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuestionnaireComponent } from '../questionnaire/questionnaire.component';

export interface IPage {
  page: number;
  itemsPerPage: number;
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() maxPages: number;
  @Input() current: number;
  @Input() itemsPerPage = 5;

  pages: any[] = [];
  pageModel: IPage = {
    page: this.current,
    itemsPerPage: this.itemsPerPage
  };
  paginatedArray = [];
  x = 17;


  constructor(
      private questionnaireComponent: QuestionnaireComponent
  ) {
      const questions = this.questionnaireComponent.questions;
      this.lengthOfQ(questions);
    //   this.createPages(questions);
    }

    lengthOfQ(questions) {
        this.maxPages = questions.length / this.itemsPerPage;
    }


  ngOnInit() {}

  createPages(questions) {
    for (let page = 0; page <= this.maxPages - 1; page++) {
        const eachPageArray = [];
        for (let i = ( page * this.itemsPerPage ); i <= ( page * this.itemsPerPage ) + ( this.itemsPerPage - 1); i++) {
            eachPageArray.push(questions[i]);
        }
        this.paginatedArray.push(eachPageArray);
    }
    questions = this.paginatedArray;
    }
}
