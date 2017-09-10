import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
import { UserService } from '../service/user.service';
import { AlertService } from '../service/alert.service';
@Component({
  moduleId: module.id,
  // selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) { }


  ngOnInit() {
  }

  model: any = {};
  loading = false;


  registerFunction() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
      data => {
        this.alertService.success('Registration successful', true);
        this.router.navigate(['/login']);
      },
      error => {
        this.alertService.error(error.message, true);
        this.loading = false;
      });
  }

}
