import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>

  constructor( private router: Router, private fbAuth: AngularFireAuth ) {
    this.user$ = this.fbAuth.authState
  }

  login() {
    this.fbAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(_ => this.router.navigate(['/home']))
    .catch (error => console.log('auth error: ' , error))
  }

  logout() {
    this.fbAuth.auth.signOut();
    this.router.navigate(['/home'])
  }
}