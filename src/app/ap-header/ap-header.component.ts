import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-header',
  templateUrl: './ap-header.component.html',
  styleUrls: ['./ap-header.component.css']
})
export class ApHeaderComponent implements OnInit {

  menuItems = ['Home', 'Enrol', 'Learn']
  logOutButtonTxt = 'log out'
  constructor() { }

  ngOnInit() {
  }

}
