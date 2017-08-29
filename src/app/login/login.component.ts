import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
// import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;



  constructor(private router: Router) {


  }

  //  const routes: Routes;

  loginFunction() {
    this.loading = true;
    console.log(this.model.username);
    console.log(this.model.password);
    this.router.navigate(['/dashBoard']);

  }

  ngOnInit() {
  }



}
