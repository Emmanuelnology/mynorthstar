import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutAuthComponent } from './layout-auth/layout-auth.component';
import { RegisterComponent } from './register/register.component';
import { FPasswordComponent } from './f-password/f-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutAuthComponent,
    RegisterComponent,
    FPasswordComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
