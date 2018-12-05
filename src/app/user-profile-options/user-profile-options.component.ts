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
  newPassword = '';
  successUpdateEmail = '';
  errorUpdateEmail = '';
  successChangePassword = '';
  errorChangePassword = '';
  user;
  constructor(public afAuth: AngularFireAuth, private authService: AuthService, private router: Router) {
    this.user = authService.user;
   }

  ngOnInit() {
  }

  updateClientEmailAddress() {
    this.authService.changeEmailAddress(this.newEmail).then(
      () => {
        this.successUpdateEmail = "Email updated successfully, your new address is " + this.authService.user.email;
        this.errorUpdateEmail = '';
      }
    )
    .catch(
      (error) => {
        this.errorUpdateEmail = error.message;
        this.successUpdateEmail = ''
      }  
    );
  }

  updateClientPassword() {
    this.authService.changePassword(this.newPassword).then(
      () => {
        this.successChangePassword = "Password updated successfully";
        this.errorChangePassword = '';
      }
    )
    .catch(
      (error) => {
        this.errorChangePassword = error.message;
        this.successChangePassword = ''
      }  
    );
  }
  }


}
