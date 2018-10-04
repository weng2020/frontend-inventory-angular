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
  constructor(private sharedService: SharedService, private router: Router, private itemService: ItemService) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initializeItems();
      }
    });
   }

  ngOnInit() {
    this.itemService.getItems().subscribe(res=>{
        this.items = res['items'].data;
    });
    this.sharedService.url = this.router.url;
  }

  initializeItems(){
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {  
       this.navigationSubscription.unsubscribe();
    }
    
  }
}
