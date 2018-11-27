import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

// Firebase imports - ignore 3 errors below this line, this is because it requires specific software to run which is fine on my laptop. Tried creating a push and pull with Kieran and it worked fine so push/pull should be unaffected.
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';


const routes: Routes = [
 { path: 'questionnaire', component: QuestionnaireComponent },
 { path: 'results', component: ResultsComponent},
 { path: 'forgot-password', component: FPasswordComponent},
 { path: 'register', component: RegisterComponent},
 { path: 'layout-app', component: LayoutAppComponent},
 { path: 'task-manager', component: TaskManagerComponent},

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
