import { Component, OnInit, Input, HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-layout-default',
  templateUrl: './layout-app.component.html',
  styleUrls: ['./layout-app.component.scss']
})
export class LayoutAppComponent implements OnInit {
  menuIsVisible = true;
  @Input() icon: string;
  @Input() pageTitle: string;
  @Input() starData: number[];
  user;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.user = this.authService.afAuth.auth.currentUser;
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.menuIsVisible = true;
  }
}

