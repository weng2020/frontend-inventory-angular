import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pagination } from './pagination.model';

@Component({
  selector: 'weng-pagination',
  templateUrl: './paginaxon.component.html',
  styleUrls: ['./paginaxon.component.scss']
})
export class PaginaxonComponent implements OnInit, OnChanges {
  pagination: any;
  start: number = 1;
  selected: number;
  len: number = 5;
  isFirstLoad: boolean;
  @Input() pageDetail: Pagination;
  @Output() onClick = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {
    this.selected = 1;
    this.isFirstLoad = true;
    this.initialize();
      // this.getPageDetailValue(); 
  }

  ngOnChanges(changes: SimpleChanges){
      if(!changes.pageDetail.isFirstChange()){
        if(this.pageDetail.lastPage < 5){
          this.len = this.pageDetail.lastPage;
        }else{
          this.len = 5;
        }
        this.initialize();
      }
     
 
  }
  
  initialize(){
    var start = this.start;
    this.pagination = Array.apply(null, {length: this.len}).map(function(value, index){
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
