import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firebase imports
// If you have errors, check slack chat, I've posted a solution - George.
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

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
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FireBaseTestDisplayComponent } from './fire-base-test-display/fire-base-test-display.component';


const routes: Routes = [
 { path: 'questionnaire', component: QuestionnaireComponent },
 { path: 'results', component: ResultsComponent},
 { path: 'forgot-password', component: FPasswordComponent},
 { path: 'register', component: RegisterComponent},
 { path: 'layout-app', component: LayoutAppComponent},
 { path: 'task-manager', component: TaskManagerComponent},
 { path: 'fbtd', component: FireBaseTestDisplayComponent}
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
   LayoutAppComponent,
   CreateTaskComponent,
   TaskListComponent,
   DashboardComponent,
   FireBaseTestDisplayComponent
 ],
 imports: [
   BrowserModule,
   RouterModule.forRoot(
     routes,
     { enableTracing: true } // <-- debugging purposes only
   ),

   // Firebase imports
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
