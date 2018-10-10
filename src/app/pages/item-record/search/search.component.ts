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
        this.initializeItems(1, this.sharedService.filterText);
      }
    });
   }

  ngOnInit() {
    this.initializeItems(1,this.sharedService.filterText);
    this.sharedService.url = this.router.url;
  }

  initializeItems(page: number, filter: any){
    this.itemService.searchItem(page,filter).subscribe(res=>{
      this.items = res.data;
      this.pageDetail = res;
  });
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {  
       this.navigationSubscription.unsubscribe();
    }
  }

  OnPaginateClick(event){
    this.sharedService.pageNumber = event;
    this.initializeItems(this.sharedService.pageNumber, this.sharedService.filterText);
  }
}
