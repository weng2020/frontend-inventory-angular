import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'inventory-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class InventorySearchComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

}
