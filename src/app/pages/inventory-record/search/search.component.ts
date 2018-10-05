import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ItemService } from '../../item-record/item.service';

@Component({
  selector: 'inventory-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class InventorySearchComponent implements OnInit {

  navigationSubscription;
  stocks = [];

  constructor(private sharedService: SharedService, private router: Router, private itemService: ItemService) { 
      // this.route.params.subscribe( params => {
      //     this.items = this.items2.filter(i => i.description.indexOf(params['filter']) != -1);
      //     console.log(this.items);
      // });
      this.navigationSubscription = this.router.events.subscribe((e: any) => {
        if (e instanceof NavigationEnd) {
          this.initializeStocks();
        }
      });
  }

  ngOnInit() {
    this.itemService.getStocks().subscribe(res=>{
      this.stocks = res;
  });
  this.sharedService.url = this.router.url;
  }

  initializeStocks(){
    if(this.sharedService.filterText === ''){
      this.sharedService.filterText = '%20';
    }
    this.itemService.searchStock(this.sharedService.filterText).subscribe(res=>{
      this.stocks = res;
  });
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {  
       this.navigationSubscription.unsubscribe();
    }
  }
}
