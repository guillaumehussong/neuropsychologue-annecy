import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    // AppComponent // Remove AppComponent because it's standalone
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: []
})
export class AppModule { }
