import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  name:string = '';
  email:string = '';
  password:string = '';
  error:string ='';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    this.authService.registerUser(this.email, this.password).then(
      () => {
        this.router.navigate(['/']);
    }
    )
    .catch((error) => {
      this.error = error.message;
    }
    );
  }
}
