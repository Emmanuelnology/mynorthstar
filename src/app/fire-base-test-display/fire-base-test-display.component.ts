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

  logInEmail() {
    this.afAuth.auth.signInWithPopup(new auth.EmailAuthProvider());
  }

  logOut() {
    this.afAuth.auth.signOut();
  }

  register() {

  }

}
