import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'item-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class ItemSearchComponent implements OnInit {

  constructor(private sharedService: SharedService) {
    
   }

  ngOnInit() {
  }

}
