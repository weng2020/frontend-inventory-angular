import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showSideNav: boolean;
  isSideNavOpen: boolean;

  getValue(event){
    this.showSideNav = event;
  }

  closeSideNav(event){
    this.showSideNav = event;
  }

}
