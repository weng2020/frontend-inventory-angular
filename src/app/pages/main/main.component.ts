import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  showSideNav: boolean;
  isSideNavOpen: boolean;
  text: string;
  constructor() { }

  getValue(event){
    this.showSideNav = event;
  }

  closeSideNav(event){
    this.showSideNav = event;
  }

  getFilterText(event){
    this.text = event;
  }

  ngOnInit() {
  }

}
