import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { LayoutAuthComponent } from './layout-auth/layout-auth.component';
import { RegisterComponent } from './register/register.component';
import { FPasswordComponent } from './f-password/f-password.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ResultsComponent } from './results/results.component';
import { StarComponent } from './star/star.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { LayoutAppComponent } from './layout-app/layout-app.component';

const routes: Routes = [
  { path: 'questionnaire', component: QuestionnaireComponent },
  { path: 'results', component: ResultsComponent},
  { path: 'forgot-password', component: FPasswordComponent},
  { path: 'register', component: RegisterComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutAuthComponent,
    RegisterComponent,
    FPasswordComponent,
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
