import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-user-profile-options',
  templateUrl: './user-profile-options.component.html',
  styleUrls: ['./user-profile-options.component.scss']
})
export class UserProfileOptionsComponent implements OnInit {
  newEmail = '';

  constructor(public afAuth: AngularFireAuth, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  updateClientEmailAddress() {
    this.authService.changeEmailAddress(this.newEmail);
  }


}
