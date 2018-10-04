import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ItemService } from './item.service';
import { ItemSearchComponent } from './search/search.component';
import { CommonsModule } from '../../commons/commons.module';
import { InventorySearchComponent } from '../inventory-record/search/search.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  ItemSearchComponent,
  InventorySearchComponent
],
  imports: [
    BrowserModule,
    CommonsModule,
    HttpClientModule
  ],
  providers: [ItemService],
  exports:[
    ItemSearchComponent,
    InventorySearchComponent
  ]
})
export class ItemModule{ }

