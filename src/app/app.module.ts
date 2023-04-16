import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { MidComponent } from './mid/mid.component';
import { BaseComponent } from './base/base.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TopComponent, MidComponent, BaseComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
