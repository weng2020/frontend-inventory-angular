import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ItemService } from './item.service';

@NgModule({
  declarations: [
      SearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ItemService],
  exports:[
      SearchComponent
  ]
})
export class ItemModule{ }
