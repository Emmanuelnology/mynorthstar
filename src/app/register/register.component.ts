import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';

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

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    this.authService.registerUser(this.email, this.password).then(
      () => {
        // updateprofile (name)
        // .then {
          // route
       // }
        this.router.navigate(['/']);
    }
    )
    .catch((error) => {
      this.error = error.message;
    }
    );
  }
}
