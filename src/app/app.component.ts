import { Component } from '@angular/core';
import { products } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private gridData: any[] = products;

  onButtonClick() {
    this.title = 'Hello from Kendo UI!';
  }
}
