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
  getValue(event){
    this.showSideNav = event;
  }
}
