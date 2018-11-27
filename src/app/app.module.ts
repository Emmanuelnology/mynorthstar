import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { StarComponent } from './results/star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    StarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
