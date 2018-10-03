import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers:[SharedService]
})
export class MainComponent implements OnInit {

  showSideNav: boolean;
  isSideNavOpen: boolean;

  constructor(private sharedService: SharedService) { }

  getValue(event){
    this.showSideNav = event;
  }

  closeSideNav(event){
    this.showSideNav = event;
  }

  getFilterText(event){
    this.sharedService.addFilter(event);
  }

  ngOnInit() {
  }

}
