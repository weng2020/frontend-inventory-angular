import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'item-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class ItemSearchComponent implements OnInit{

  items: any;
  items2 = [
    { item_code: '012312312', description: 'Ampalaya Plus 300g', unit: 'pack', price: 160 },
    { item_code: '912388123', description: 'Coke 1 Litro', unit: 'bottle', price: 80 },
    { item_code: '887951234', description: 'Vanmark', unit: 'sack', price: 1600 },
    { item_code: '899931235', description: 'Mega Flour', unit: 'sack', price: 860 },
    { item_code: '878390135', description: 'Edible', unit: 'container', price: 1600 },
     
  ];
  navigationSubscription;

  constructor(private sharedService: SharedService, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initializeItems();
      }
    });
   }

  ngOnInit() {
    this.items = this.items2;
  }

  initializeItems(){
    this.items = this.items2.filter(item => item.item_code.indexOf(this.sharedService.filterText) != -1);
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {  
       this.navigationSubscription.unsubscribe();
    }
  }
}
