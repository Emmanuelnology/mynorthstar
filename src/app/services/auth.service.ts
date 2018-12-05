import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

interface IUser {
  uid: string;
  photoURL: string;
  displayName: string;
  email: string;
  emailVerified: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user: IUser;

  constructor(private db: AngularFirestore, public afAuth: AngularFireAuth) {
    if (this.afAuth.auth) {
      this.user = this.afAuth.auth.currentUser;
    }
  }

  logIn(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password);
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

  changeEmailAddress(newEmail) {
    console.log('reached!');
    console.log('This is the new email address ' + newEmail);
    // console.log("This is the old email address " + this.afAuth.auth.updateCurrentUser());
    console.log('Accessed new email feature with ' + newEmail + ' old email is ' + this.user.email);
    // return this.afAuth.user.updateEmail(newEmail);
  }



}
