import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';

const routes: Routes = [
  { path: 'questionnaire', component: QuestionnaireComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
