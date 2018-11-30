import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  email:string='';
  error:string='';
  confirmation:string;
  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
  }

  resetPassword() {
    this.authService.resetPassword(this.email).then(
      ()=>{
      this.confirmation = 'Reset password sent to this address, check your inbox.';
      this.error = '';
    }
    )
    .catch((error)=>{
      this.error = error.message;
      this.confirmation = '';
    }
    );
  }

}
