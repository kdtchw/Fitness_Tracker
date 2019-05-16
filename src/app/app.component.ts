import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from './auth/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'fitnessTracker';
  isAuth = false;
  authSubscription: Subscription;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
  	this.authSubscription = this.authService.authChange.subscribe(authStatus => {
  		this.isAuth = authStatus;
  	});
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
  	this.authSubscription.unsubscribe();
  }
}
