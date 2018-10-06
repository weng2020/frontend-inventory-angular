import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InventorySearchComponent } from './search/search.component';
import { InventoryService } from './inventory.services';
import { CommonsModule } from '../../commons/commons.module';

@NgModule({
  declarations: [
    InventorySearchComponent
],
  imports: [
    BrowserModule,
    CommonsModule,
    HttpClientModule
  ],
  providers: [InventoryService],
  exports:[
      InventorySearchComponent
  ]
})
export class InventoryModule{ }

