import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';
import { Router } from '@angular/router'

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  private loginFlag: boolean = true;;



  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.loginFlag = true;
  }

  onLoginLogoutClick() {
    // if (this.auth.isUserLoggedIn())
    //   this.loginFlag = 'Login';
    // else
    //   this.loginFlag = 'Logout';

    // if (this.auth.isUserLoggedIn()) {
    //   this.loginLabel = 'Logout';
    //   this.router.navigate(['/dashboard']);
    // }
    // else {
    //   this.loginLabel = 'Login';
    //   this.router.navigate(['/login']);
    // }
  }

  loginLabelFunc() {
    return this.loginFlag;
  }

  onLoginSuccess() {
    this.loginFlag = false;
    console.log('onLoginSuccess :' + this.loginFlag);
  }

  onLogoutSuccess() {
    this.loginFlag = true;
    console.log('onLogoutSuccess :' + this.loginFlag);
  }

  onButtonClick() {
    this.title = 'Hello from Kendo UI!';
  }
}
