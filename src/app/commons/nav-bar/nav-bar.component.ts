import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Output() showSideNav = new EventEmitter<boolean>();
  @Input() maximize: boolean;
  constructor() { }

  ngOnInit() {
  }

  toggleSideNav(){
      this.maximize = true;
      this.showSideNav.emit(this.maximize);
  }
}
