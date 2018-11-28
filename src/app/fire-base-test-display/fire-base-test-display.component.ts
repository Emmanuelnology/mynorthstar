import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Component({
  selector: 'app-fire-base-test-display',
  templateUrl: './fire-base-test-display.component.html',
  styleUrls: ['./fire-base-test-display.component.scss']
})

export class FireBaseTestDisplayComponent {

  items: Observable<any[]>;
  constructor(db: AngularFirestore, public afAuth: AngularFireAuth) {
    this.items = db.collection('items').valueChanges();
  }

  logIn() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logInEmail(email, password) {
    console.log('Sign in \nEmail: ' +  email + ' Password: ' + password);
    document.getElementById('errorMessageRegister').innerHTML = ('Sign in \nEmail: ' +  email + ' Password: ' + password);
    this.afAuth.auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const d1 = document.getElementById('errorMessageLogInEmail');
      d1.insertAdjacentHTML('afterend', '<h2 style="color: red"> Error message: </h2>' +
      '<p style = "text-align: center; color: red">' + errorMessage + '</p>');
    });
  }

  logOut() {
    this.afAuth.auth.signOut();
  }

  registerUser(email, password) {
    console.log('Register User \nEmail: ' +  email + ' Password: ' + password);
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const d1 = document.getElementById('errorMessageRegister');
      d1.insertAdjacentHTML('afterend', '<h2 style="color: red"> Error message: </h2>' +
      '<p style = "text-align: center; color: red">' + errorMessage + '</p>');
    });
  }
}
