import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface IPage {
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
  @Input() postsPerPage: number[];
  @Input() itemsPerPage: number;

  @Output() changePage = new EventEmitter();

  pages: any[] = [];
  page: IPage = {
    page: this.current,
    itemsPerPage: this.itemsPerPage
  };

  constructor() { }

  ngOnInit() {
    if (this.maxPages) {
      this.createPages();
    }
  }

  createPages() {
    for (let page = 1; page <= this.maxPages; page++) {
      this.pages.push(page);
    }
  }

}
