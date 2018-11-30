import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showPassword = true;
  showLogin = false;

  togglePassword() {
    this.showPassword = ! this.showPassword;
    this.showLogin = ! this.showLogin;
  }
  constructor() { }

  ngOnInit() {
  }

}
