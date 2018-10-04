import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'weng-pagination',
  templateUrl: './paginaxon.component.html',
  styleUrls: ['./paginaxon.component.scss']
})
export class PaginaxonComponent implements OnInit {
  numbers: any;
  start: number = 5;
  selected: number;
  isFirstLoad: boolean;
  constructor() {
    var start = this.start;
    this.numbers = Array.apply(null, {length: 5}).map(function(value, index){
      var pagination = index + start;
      return pagination++;
    }); 
  }

  ngOnInit() {
    this.isFirstLoad = true;
  }

  OnClick(num){
    this.selected = num;
    this.isFirstLoad = false;
  }

}
