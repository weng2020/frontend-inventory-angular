import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'inventory-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class InventorySearchComponent implements OnInit {

  constructor(private sharedService: SharedService, private route: ActivatedRoute) { 
      // this.route.params.subscribe( params => {
      //     this.items = this.items2.filter(i => i.description.indexOf(params['filter']) != -1);
      //     console.log(this.items);
      // });
  }

  ngOnInit() {
  }

}
