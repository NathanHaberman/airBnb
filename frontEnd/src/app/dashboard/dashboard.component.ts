import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUrl: any;

  constructor(
    private _route: Router,
  ) { } 

  ngOnInit() {
    this._route.events.subscribe((event) => {
      console.log(event)
      this.currentUrl = event;
    })
  }

}
