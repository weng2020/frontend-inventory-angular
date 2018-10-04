import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'inventory-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class InventorySearchComponent implements OnInit {
items;
items2 = [
  { item_code: '012312312', description: 'Ampalaya Plus 300g', unit: 'pack', price: 160 },
  { item_code: '912388123', description: 'Coke 1 Litro', unit: 'bottle', price: 80 },
  { item_code: '887951234', description: 'Vanmark', unit: 'sack', price: 1600 },
  { item_code: '899931235', description: 'Mega Flour', unit: 'sack', price: 860 },
  { item_code: '878390135', description: 'Edible', unit: 'container', price: 1600 },
   
];
  constructor(private sharedService: SharedService, private route: ActivatedRoute) { 
      this.route.params.subscribe( params => {
          this.items = this.items2.filter(i => i.description.indexOf(params['filter']) != -1);
          console.log(this.items);
      });
  }

  ngOnInit() {
  }

}
