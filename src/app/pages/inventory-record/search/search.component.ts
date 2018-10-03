import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'inventory-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class InventorySearchComponent implements OnInit {
@Input() filter: SharedService;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

}
