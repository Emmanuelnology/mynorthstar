import { Component, OnInit, Input, HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'app-layout-default',
  templateUrl: './layout-app.component.html',
  styleUrls: ['./layout-app.component.scss']
})
export class LayoutAppComponent implements OnInit {
  menuIsVisible = true;
  @Input() icon: string;
  @Input() title: string;
  @Input() starData: number[];
  user;

  constructor(public afAuth: AngularFireAuth, private authService: AuthService) {
    this.user = this.afAuth.auth.currentUser;
  }

  ngOnInit() {
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.menuIsVisible = true;
  }

  computeStyle() {
    return 'background-color: red';
    // return "background-image: url(" + user.photoURL + ")";
  }
}

