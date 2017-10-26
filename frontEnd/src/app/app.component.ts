import { Component } from '@angular/core';
import { NgDateRangePickerOptions } from 'ng-daterangepicker';

import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchString: string;
  options: NgDateRangePickerOptions;

  
  constructor(
    private _apiService: ApiService,
    private _route: Router,
  ) { } 

  ngOnInit() {
    this.options = {
      theme: 'default',
      range: 'tm',
      dayNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      presetNames: ['This Month', 'Last Month', 'This Week', 'Last Week', 'This Year', 'Last Year', 'Start', 'End'],
      dateFormat: 'yMd',
      outputFormat: 'MM/DD/YYYY',
      startOfWeek: 1
    };
  }

  search(){
    this._apiService.getListing(this.searchString)
    .then(data => {
      if (data.errors){
        console.log(data.errors)
      } else {
        // Route to a search page 
        this.searchString = data.listing
      }
    });
  }
}
