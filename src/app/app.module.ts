import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObituariesModule } from './obituaries/obituaries.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ObituariesModule,
    BrowserAnimationsModule,
    ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
