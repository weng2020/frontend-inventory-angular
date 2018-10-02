import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Output() showSideNav = new EventEmitter<boolean>();
  toggle: boolean;
  constructor() { }

  ngOnInit() {
  }

  toggleSideNav(){
      this.toggle = this.toggle === true ? false : true;
      this.showSideNav.emit(this.toggle);
  }
}
