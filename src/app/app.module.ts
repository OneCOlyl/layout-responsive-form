import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LeftSideComponent } from './layout/left-side/left-side.component';
import { RightSideComponent } from './layout/right-side/right-side.component';
import { PrizmSharedModule } from "./prizm.shared.module";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LeftSideComponent,
    RightSideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrizmSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
