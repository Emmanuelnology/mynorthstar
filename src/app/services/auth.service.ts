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

  constructor(private db: AngularFirestore, public afAuth: AngularFireAuth) {

  }

  get user() {
    return this.afAuth.auth.currentUser;
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

  changeName(newName) {
    this.afAuth.auth.currentUser.updateProfile({
      displayName: newName,
      photoURL: this.user.photoURL
    });
  }

  changeEmailAddress(newEmail) {
    return this.afAuth.auth.currentUser.updateEmail(newEmail);
  }

  changePassword(newPassword) {
    return this.afAuth.auth.currentUser.updatePassword(newPassword);
  }

  verifyEmailAddress() {
    return this.afAuth.auth.currentUser.sendEmailVerification();
  }

  changeImage(newImage) {
    this.afAuth.auth.currentUser.updateProfile({
      displayName: this.user.displayName,
      photoURL: newImage
    });
  }
}
