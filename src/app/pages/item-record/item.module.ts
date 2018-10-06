import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ItemService } from './item.service';
import { ItemSearchComponent } from './search/search.component';
import { CommonsModule } from '../../commons/commons.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  ItemSearchComponent
],
  imports: [
    BrowserModule,
    CommonsModule,
    HttpClientModule
  ],
  providers: [ItemService],
  exports:[
    ItemSearchComponent
  ]
})
export class ItemModule{ }

