import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { ListHorizontalComponent } from './list-horizontal/list-horizontal.component';
import { ListVerticalComponent } from './list-vertical/list-vertical.component';

@NgModule({
  declarations: [
        ListComponent,
        ListVerticalComponent,
        ListHorizontalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports:[
        ListHorizontalComponent,
        ListVerticalComponent,
        ListComponent
  ]
})
export class ListModule { }
