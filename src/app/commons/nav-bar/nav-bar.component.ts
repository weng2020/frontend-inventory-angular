import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{

  @Input() maximize: boolean;
  @Output() showSideNav = new EventEmitter<boolean>();
  @Output() filter = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  toggleSideNav(){
      this.maximize = true;
      this.showSideNav.emit(this.maximize);
  }

  onEnter(event, value){
    if(event.code === 'Enter' || event.code === 'NumpadEnter'){
      this.filter.emit(value);
    }
  }
}
