import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SharedService } from '../../pages/shared.service';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input() show: boolean;
  @Output() onClose = new EventEmitter<boolean>();
  image: string = "../../../assets/images/assassin.jpg";
  
  constructor() { }

  ngOnInit() {
  }

  OnClose(){
    this.show = false;
    this.onClose.emit(this.show);
  }  

}
