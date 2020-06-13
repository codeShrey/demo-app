import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UIModule } from './components/UI/ui.module';
import { DataModule } from './components/data/data.module';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UIModule,
    DataModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
