import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Pagination } from './pagination.model';

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
  @Input() pageDetail: Pagination;
  @Output() onClick = new EventEmitter<number>();
  constructor() {
    
   
  }

  ngOnInit() {
    var start = this.start;
    this.isFirstLoad = true;
    // this.getPageDetailValue();
    this.pagination = Array.apply(null, {length: 5}).map(function(value, index){
      var num = index + start;
      return num++;
    }); 
  }

  OnClick(num){
    this.selected = num;
    this.isFirstLoad = false;
    this.onClick.emit(num);
  }

  // async getPageDetailValue(){
  //   this._pageDetail = <Pagination> await this.wait(this.pageDetail);
  //   console.log(this._pageDetail);
  // }

  // wait(x) {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve(x);
  //     }, 2000);
  //   });
  // }
}
