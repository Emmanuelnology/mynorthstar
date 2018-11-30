import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


// Imported Components
import { Ng2ArcProgressModule } from 'angular2-arc-progress';

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
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { MyStarComponent } from './my-star/my-star.component';
import { StarComponent } from './star/star.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { LayoutAppComponent } from './layout-app/layout-app.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FireBaseTestDisplayComponent } from './fire-base-test-display/fire-base-test-display.component';
import { ProgressArcComponent } from './progress-arc/progress-arc.component';

import { StyleGuideComponent } from './style-guide/style-guide.component';
import { LoginComponent } from './login/login.component';
import { TinyStarComponent } from './tiny-star/tiny-star.component';
import { CompareStarComponent } from './compare-star/compare-star.component';
import { HistoryComponent } from './history/history.component';
import { NavComponent } from './nav/nav.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
 { path: 'questionnaire', component: QuestionnaireComponent },
 { path: 'login', component: LoginComponent},
 { path: 'register', component: RegisterComponent},
 { path: 'task-manager', component: TaskManagerComponent},
 { path: 'fbtd', component: FireBaseTestDisplayComponent},
 { path: 'dashboard', component: DashboardComponent},
 { path: 'styles', component: StyleGuideComponent},
 { path: 'compare', component: CompareStarComponent},
 { path: 'forgotten-password', component: ForgotPasswordComponent},

 { path: '', component: MyStarComponent},
];

@NgModule({
 declarations: [
   AppComponent,
   LayoutAuthComponent,
   RegisterComponent,
   QuestionnaireComponent,
   MyStarComponent,
   StarComponent,
   TaskManagerComponent,
   LayoutAppComponent,
   CreateTaskComponent,
   TaskListComponent,
   DashboardComponent,
   FireBaseTestDisplayComponent,
   ProgressArcComponent,
   StyleGuideComponent,
   LoginComponent,
   TinyStarComponent,
   CompareStarComponent,
   HistoryComponent,
   NavComponent,
   ForgotPasswordComponent
 ],
 imports: [
   BrowserModule,
   Ng2ArcProgressModule,
   FormsModule,
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
