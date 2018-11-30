import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user;

  constructor(private db: AngularFirestore, public afAuth: AngularFireAuth) { }

  logIn(email, password) {
    console.log('Sign in \nEmail: ' +  email + ' \nPassword: ' + password);
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logOut() {
    this.afAuth.auth.signOut();
  }


  registerUser(email, password) {
    console.log('Register User \nEmail: ' +  email + ' Password: ' + password);
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  resetPassword(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }



}
