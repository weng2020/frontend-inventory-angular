import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ButtonComponent } from './button/button.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [
    NavBarComponent,
    ButtonComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports:[
    NavBarComponent,
    ButtonComponent,
    SideNavComponent
  ]
})
export class CommonsModule { }
