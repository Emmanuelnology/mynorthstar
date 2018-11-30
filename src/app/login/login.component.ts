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
  email:string='';
  password:string='';
  emailResetPassword:string = '';
  error:string;
  errorResetPassword:string;
  resetPasswordConfirm:string;
  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
  }

  logIn() {
    this.authService.logIn(this.email, this.password)
    .then(
      ()=>{
      console.log('Redirect to home page');
      this.router.navigate(['/']);
    }
    )
    .catch((error)=>{
      this.error=error.message;
    })
  }

  resetPassword() {
    this.authService.resetPassword(this.emailResetPassword).then(
      ()=>{
      this.resetPasswordConfirm = 'Reset password sent to this address, check your inbox.';
      this.errorResetPassword = '';
    }
    )
    .catch((error)=>{
      this.errorResetPassword = error.message;
      this.resetPasswordConfirm = '';
    }
    );
  }

}
