import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
// import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
import { AlertService } from '../service/alert.service';

@Component({
  moduleId: module.id,
  // selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;


  constructor(private router: Router, private authService: AuthenticationService, private alertService: AlertService) {

  }

  ngOnInit() {
    // reset login status
    this.authService.logout();

    // get return url from route parameters or default to '/'
    //  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  //  const routes: Routes;

  loginFunction() {
    this.loading = true;
    console.log(this.model.username);
    console.log(this.model.password);
    this.authService.login(this.model.username, this.model.password)
      .subscribe(
      data => {
        this.router.navigate(['/dashBoard']);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });

  }
}
