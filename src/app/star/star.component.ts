import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  categories = [
    {
      category: 'Happy',
      score: 5,
    },
    {
      category: 'Finances',
      score: 8,
    },
    {
      category: 'Fun & Recreation',
      score: 3,
    },
    {
      category: 'Relationships',
      score: 4
    }

  ];


  constructor() { }

  ngOnInit() {
  }

}
