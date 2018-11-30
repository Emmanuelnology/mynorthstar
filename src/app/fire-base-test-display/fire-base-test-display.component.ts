import { Component, AfterContentInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AuthService } from '../services/auth.service';





// https://stackoverflow.com/questions/38559457/firebase-v3-updateprofile-method



@Component({
  selector: 'app-fire-base-test-display',
  templateUrl: './fire-base-test-display.component.html',
  styleUrls: ['./fire-base-test-display.component.scss']
})

export class FireBaseTestDisplayComponent implements AfterContentInit {
  user;
  items: Observable<any[]>;
  constructor(private db: AngularFirestore, public afAuth: AngularFireAuth, private authService: AuthService) {

  }

  // ngOnInit(): any {
  //   this.items = this._firebaseService.getResources()
  // }

  ngAfterContentInit() {
    this.items = this.db.collection('items').valueChanges();
    this.user = this.afAuth.user;
    // FIRESE INITALISE HERE? PREFERENCE TO BE INSIDE ngOnInit()? firebase.init;
  }

  logIn() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }


  logInEmail(email, password) {
    this.authService.logIn(email, password).then(
      () => {
      console.log('Redirect to home page');
    }
    )
    .catch((error) => {
      console.log(error);
    }
    );
  }

  logOut() {
    this.authService.logOut();
    console.log('Redirect to login page');
  }


  registerUser(email, password) {
    this.authService.registerUser(email, password).then(
      () => {
      console.log('Redirect to home page');
    }
    )
    .catch((error) => {
      console.log(error);
    }
    );
  }


  resetPassword(email: string) {
    this.authService.resetPassword(email).then(
      () => {
      console.log('Redirect to  page');
    }
    )
    .catch((error) => {
      console.log(error);
    }
    );
  }
}
