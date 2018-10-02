import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.scss']
})
export class SelectListComponent implements OnInit {
@Input() items;
@Output() onChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {

  }

  OnChange(value){
    this.onChange.emit(value);
    console.log(value);
  }
}
