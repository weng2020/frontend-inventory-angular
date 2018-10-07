import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { Router, NavigationEnd } from '@angular/router';
import { ItemService } from '../item.service';
import { Item } from '../item.model';

@Component({
  selector: 'item-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class ItemSearchComponent implements OnInit{

  navigationSubscription;
  items = [];
  pageDetail : any;

  constructor(private sharedService: SharedService, private router: Router, private itemService: ItemService) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initializeItems();
      }
    });
   }

  ngOnInit() {
  
    this.itemService.searchItem(1,this.sharedService.filterText).subscribe(res=>{
      this.items = res.data;
      this.pageDetail = res;
  });
    this.sharedService.url = this.router.url;
  }

  initializeItems(){
    this.itemService.searchItem(this.sharedService.pageNumber,this.sharedService.filterText).subscribe(res=>{
      this.items = res.data;
      this.pageDetail = res;
      console.log(res);
  });
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {  
       this.navigationSubscription.unsubscribe();
    }
    
  }

  OnPaginateClick(event){
    this.sharedService.pageNumber = event;
    this.initializeItems();
  }
}
