import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ResultsComponent } from './results/results.component';
import { StarComponent } from './star/star.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { LayoutAppComponent } from './layout-app/layout-app.component';

const routes: Routes = [
  { path: 'questionnaire', component: QuestionnaireComponent },
  { path: 'results', component: ResultsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    ResultsComponent,
    StarComponent,
    TaskManagerComponent,
    LayoutAppComponent
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
