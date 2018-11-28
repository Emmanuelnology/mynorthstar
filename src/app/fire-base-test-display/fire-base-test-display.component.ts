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
    console.log("Sign in \nEmail: " +  email + " Password: " + password);
    this.afAuth.auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }

  logOut() {
    this.afAuth.auth.signOut();
  }

  registerUser(email, password) {
    console.log("Register User \nEmail: " +  email + " Password: " + password);
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });

  }
  
  message(){
    alert("hi there");
    console.log("hi there");
  }
}
