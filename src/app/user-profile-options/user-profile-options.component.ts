import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile-options',
  templateUrl: './user-profile-options.component.html',
  styleUrls: ['./user-profile-options.component.scss']
})
export class UserProfileOptionsComponent implements OnInit {

  constructor(private router: Router) {
    
}

  ngOnInit() {
  }

}
