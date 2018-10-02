import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.css']
})
export class SelectListComponent implements OnInit {
@Input() items;

  constructor() { }

  ngOnInit() {
    
  }

}
