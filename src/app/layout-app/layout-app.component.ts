import { Component, OnInit, Input, HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-layout-default',
  templateUrl: './layout-app.component.html',
  styleUrls: ['./layout-app.component.scss']

})
export class LayoutAppComponent implements OnInit {
  menuIsVisible = true;
  profileIsVisible = false;
  @Input() icon: string;
  @Input() pageTitle: string;
  @Input() starData: number[];
  user;

  constructor(private authService: AuthService, private router: Router) {
  }

  toggleProfile(event: Event) {
    event.stopPropagation();
    this.profileIsVisible = ! this.profileIsVisible;
  }

  ngOnInit() {
    this.user = this.authService.afAuth.auth.currentUser;
  }

  disableProfileMenu($event) {
    this.profileIsVisible = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.menuIsVisible = true;
  }
  logOut() {
    this.authService.logOut().then(
      () => {
        this.router.navigate(['/login']);
      }
     );
  }

}
