import { Component, AfterContentInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import * as firebase from 'firebase';





//https://stackoverflow.com/questions/38559457/firebase-v3-updateprofile-method



@Component({
  selector: 'app-fire-base-test-display',
  templateUrl: './fire-base-test-display.component.html',
  styleUrls: ['./fire-base-test-display.component.scss']
})

export class FireBaseTestDisplayComponent implements AfterContentInit{
  user;
  items: Observable<any[]>;
  constructor(public db: AngularFirestore, public afAuth: AngularFireAuth) {
    
  }

  // ngOnInit(): any {
  //   this.items = this._firebaseService.getResources()
  // }

  ngAfterContentInit(){
    this.items = this.db.collection('items').valueChanges();
    this.user = this.afAuth.user;
    // FIRESE INITALISE HERE? PREFERENCE TO BE INSIDE ngOnInit()? firebase.init;
  }

  logIn() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }







  logInEmail(email, password) {
    let user= null;
    console.log('Sign in \nEmail: ' +  email + ' \nPassword: ' + password);
    this.afAuth.auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const d1 = document.getElementById('errorMessageLogInEmail');
      d1.insertAdjacentHTML('afterend', '<h2 style="color: red"> Error message: </h2>' +
      '<p style = "text-align: center; color: red">' + errorMessage + '</p>');
    });

    //Using firebase.auth().currentUser creates error "Firebase: no firebase app has been created".
    user = this.afAuth.auth.currentUser;
    console.log("user is: " + user);
    console.log(user);
  }







  logOut() {
    this.afAuth.auth.signOut();
  }

  registerUser(email, password) {
    let user = null;
    console.log('Register User \nEmail: ' +  email + ' Password: ' + password);
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    // .then(
    //   function(){
    //     user = this.afAuth.auth.currentUser;
    //     user.sendEmailVerification();
    //     console.log('The user object is: ' + user);
    //   }
    
  
      
      
      
      
      
      
      //no problem
      //updateProfile shananagans
      //.then redirect to home page







    
    .catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const d1 = document.getElementById('errorMessageRegister');
      d1.insertAdjacentHTML('afterend', '<h2 style="color: red"> Error message: </h2>' +
      '<p style = "text-align: center; color: red">' + errorMessage + '</p>');
    });

    user = this.afAuth.auth.currentUser;
    console.log("user is: " + user);
    // user.sendEmailVerification();
  }


  resetPassword(email: string) {
    this.afAuth.auth.sendPasswordResetEmail(email)
      .then(() => console.log('email sent'))
      .catch((error) => console.log(error));
  }
}
