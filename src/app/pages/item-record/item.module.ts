import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ItemService } from './item.service';
import { ItemSearchComponent } from './search/search.component';
import { CommonsModule } from '../../commons/commons.module';
import { InventorySearchComponent } from '../inventory-record/search/search.component';

@NgModule({
  declarations: [
  ItemSearchComponent,
  InventorySearchComponent
],
  imports: [
    BrowserModule,
    CommonsModule
  ],
  providers: [ItemService],
  exports:[
    ItemSearchComponent,
    InventorySearchComponent
  ]
})
export class ItemModule{ }

