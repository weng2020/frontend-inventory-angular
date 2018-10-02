import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ItemSearchComponent } from '../pages/item-record/search/search.component';

const routes : Routes =[
  {path: 'items' , component: ItemSearchComponent}
];

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports:[
      RouterModule
  ]
})
export class PageRoutingModule { }
