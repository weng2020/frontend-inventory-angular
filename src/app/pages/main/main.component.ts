import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers:[SharedService]
})
export class MainComponent implements OnInit {

  showSideNav: boolean;
  isSideNavOpen: boolean;

  constructor(private sharedService: SharedService, private router: Router) { }

  getValue(event){
    this.showSideNav = event;
  }

  closeSideNav(event){
    this.showSideNav = event;
  }

  // retrieve filter text from search
  getFilterText(event){
    this.sharedService.filterText = event;
    this.router.navigate([this.router.url]);
  }

  ngOnInit() {
  }

}
