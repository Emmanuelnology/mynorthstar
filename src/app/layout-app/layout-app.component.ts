import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-layout-default',
  templateUrl: './layout-app.component.html',
  styleUrls: ['./layout-app.component.scss']
})
export class LayoutAppComponent implements OnInit {
  menuIsVisible = true;
  @Input() icon: string;
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.menuIsVisible = true;
  }
}

