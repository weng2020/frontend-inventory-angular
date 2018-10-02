import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input() show: boolean;
  @Output() onClose = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  OnClose(){
    this.show = false;
    this.onClose.emit(this.show);
  }  

}
