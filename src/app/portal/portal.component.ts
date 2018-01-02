import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {
  position: boolean;

  constructor() { }

  ngOnInit() {
    this.position = false;
  }

  onClick() {
    alert('Save Successfully!');
  }
}
