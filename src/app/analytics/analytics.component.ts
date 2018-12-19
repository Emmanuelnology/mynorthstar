import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  trackingID: string;
  constructor() {
    this.trackingID = environment.tracking.id;
   }

  ngOnInit() {
  }

}
