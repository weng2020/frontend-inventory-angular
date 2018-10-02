import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ItemService } from './item.service';
import { ItemSearchComponent } from './search/search.component';

@NgModule({
  declarations: [
  ItemSearchComponent
],
  imports: [
    BrowserModule
  ],
  providers: [ItemService],
  exports:[
    ItemSearchComponent
  ]
})
export class ItemModule{ }
