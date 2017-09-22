import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router, private auth: AuthenticationService, private appCom: AppComponent) { }

  ngOnInit() {
    this.auth.logout();
    this.appCom.onLogoutSuccess();
  }

  loginFunction() {
    this.router.navigate(['/login']);
  }
}
