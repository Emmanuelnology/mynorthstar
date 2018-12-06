import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  showPassword = false;
  email = '';
  password = '';
  error = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logIn() {
    this.authService.logIn(this.email, this.password)
    .then(
      () => {
        
      this.router.navigate(['/']);
      
    }
    )
    .catch((error) => {
      this.error = error.message;
    });
  }


}
