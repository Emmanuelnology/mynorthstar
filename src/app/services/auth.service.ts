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
    this.user = this.afAuth.auth.signInWithEmailAndPassword(email, password);
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logOut() {
    return this.afAuth.auth.signOut();
  }


  registerUser(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  resetPassword(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  changeEmailAddress(email, password, newEmail) {
    this.user.signInWithEmailAndPassword(email, password)
      .then(function(user) {
        this.user.updateEmail(newEmail);
      });
  }



}
