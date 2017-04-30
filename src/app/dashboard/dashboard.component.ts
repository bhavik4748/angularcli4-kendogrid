import { Component, OnInit } from '@angular/core';
import { products } from "app/products";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'app works!';
  constructor() { }

  public gridData: any[];

  onButtonClick() {
    this.title = 'Hello from Kendo UI!';
  }
  ngOnInit() {
    this.gridData = products;
  }

}
