import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

export interface IUser {
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
  userCollection: AngularFirestoreCollection;
  constructor(private db: AngularFirestore, public afAuth: AngularFireAuth) {
    this.userCollection = this.db.collection('userAttributes');
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

  changeName(newName: string) {
    return this.afAuth.auth.currentUser.updateProfile({
      displayName: newName,
      photoURL: this.user.photoURL
    });
  }

  changeEmailAddress(newEmail: string) {
    return this.afAuth.auth.currentUser.updateEmail(newEmail);
  }

  changePassword(newPassword: string) {
    return this.afAuth.auth.currentUser.updatePassword(newPassword);
  }

  verifyEmailAddress() {
    return this.afAuth.auth.currentUser.sendEmailVerification();
  }

  changeImage(newImage: string) {
    return this.afAuth.auth.currentUser.updateProfile({
      displayName: this.user.displayName,
      photoURL: newImage
    });
  }
}
