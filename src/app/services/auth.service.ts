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
    this.afAuth.auth.currentUser.updateProfile({
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
    this.afAuth.auth.currentUser.updateProfile({
      displayName: this.user.displayName,
      photoURL: newImage
    });
  }

  updateLocation(userLocation: string){
    console.log("accessed update location " + this.db.collection.name);
    console.log("user id is " + this.afAuth.auth.currentUser.uid);
    console.log("user email is " + this.afAuth.auth.currentUser.email);
    // this.userCollection = this.db.collection('userAttributes', (reference) => {
    //   console.log(reference
    //   .where('uid', '==', this.afAuth.auth.currentUser.uid));
    // }
   // );
    // var usercollectionabcds = this.db.collection("userAttributes").doc('test');
    // console.log("users are " + usercollectionabcds);
    
  //  let bookCollection = this.db.collection('userAttributes');
  //  console.log("users are " + bookCollection);

  }

}
