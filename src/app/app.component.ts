import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  showSideNav: boolean;
  items = ['1','2','3'];
  isSideNavOpen: boolean;

  getValue(event){
    this.showSideNav = event;
    console.log(event);
  }

  closeSideNav(event){
    this.showSideNav = event;
    console.log(event);
  }

}
