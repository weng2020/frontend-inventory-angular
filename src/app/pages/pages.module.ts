import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ItemModule } from './item-record/item.module';
import { CommonsModule } from '../commons/commons.module';
import { MainComponent } from './main/main.component';
import { PageRoutingModule } from './pagerouting.module';
import { InventoryModule } from './inventory-record/inventory.module';

@NgModule({
  declarations: [
  MainComponent],
  imports: [
    BrowserModule,
    CommonsModule,
    ItemModule,
    InventoryModule,
    PageRoutingModule
  ],
  exports:[
    MainComponent,
    ItemModule,
    InventoryModule,
    CommonsModule,
    PageRoutingModule
  ],
  providers: []
})
export class PagesModule { }
