import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'weng-pagination',
  templateUrl: './paginaxon.component.html',
  styleUrls: ['./paginaxon.component.scss']
})
export class PaginaxonComponent implements OnInit {
  pagination: any;
  start: number = 1;
  selected: number;
  isFirstLoad: boolean;
  constructor() {
    var start = this.start;
    this.pagination = Array.apply(null, {length: 5}).map(function(value, index){
      var num = index + start;
      return num++;
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
