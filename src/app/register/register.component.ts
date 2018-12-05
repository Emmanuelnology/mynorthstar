import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  name = '';
  email = '';
  password = '';
  error = '';

  constructor(public afAuth: AngularFireAuth, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    this.authService.registerUser(this.email, this.password).then(
      () => {
        this.afAuth.auth.currentUser.updateProfile({
        displayName: this.name,
        photoURL: 'https://www.telegraph.co.uk/content/dam/Pets/spark/royal-canin/tabby-kitten-small.jpg?imwidth=450'
      });
      this.router.navigate(['/']);
      }
    )
    .catch((error) => {
      this.error = error.message;
    });
  }
}
