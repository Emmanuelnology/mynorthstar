import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-user-profile-options',
  templateUrl: './user-profile-options.component.html',
  styleUrls: ['./user-profile-options.component.scss']
})


export class UserProfileOptionsComponent implements OnInit {
  newName = '';
  errorNewName = '';
  successNewName = '';

  newEmail = '';
  successUpdateEmail = '';
  errorUpdateEmail = '';

  newImage = '';
  errorNewImage = '';

  newLocation = '';

  newPassword = '';
  successChangePassword = '';
  errorChangePassword = '';

  confirmPassword = '';

  user;
  constructor(public afAuth: AngularFireAuth, private authService: AuthService, private router: Router) {
    this.user = authService.user;
   }

  ngOnInit() {

  }

  updateClientName() {
    this.authService.changeName(this.newName).then(
      () => {
        this.newName = '';
        this.errorNewName = '';
        this.successNewName = 'Name successfully updated to \'' + this.authService.user.displayName + '\'';
      }
    )
    .catch(
      (error) => {
        this.errorNewName = error.message;
        this.successNewName = '';
      }
    );
  }

  updateClientEmailAddress() {
    this.authService.changeEmailAddress(this.newEmail).then(
      () => {
        this.successUpdateEmail = 'Email updated successfully, your new address is \'' + this.authService.user.email + '\'';
        this.errorUpdateEmail = '';
      }
    )
    .catch(
      (error) => {
        this.errorUpdateEmail = error.message;
        this.successUpdateEmail = '';
      }
    );
  }

  updateClientImage() {
    console.log(this.newImage);
    this.authService.changeImage(this.newImage).then(
      () => {
        this.newImage = '';
        this.errorNewImage = '';
      }
    )
    .catch(
      (error) => {
        this.errorNewImage = error.message;
      }
    );
  }

  updateClientPassword() {
    this.authService.changePassword(this.newPassword).then(
      () => {
        this.successChangePassword = 'Password updated successfully';
        this.errorChangePassword = '';
      }
    )
    .catch(
      (error) => {
        this.errorChangePassword = error.message;
        this.successChangePassword = '';
      }
    );
  }




}




