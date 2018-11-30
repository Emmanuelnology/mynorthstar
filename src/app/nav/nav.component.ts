import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() menuIsVisible;

  constructor(private authService: AuthService, private router:Router) { }
  

  ngOnInit() {

  }

  logOut() {
    this.authService.logOut().then(
      () =>{
        this.router.navigate(['/login']);
      }
     );
  }
}
