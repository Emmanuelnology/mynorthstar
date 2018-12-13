import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Imported Components
import { Ng2ArcProgressModule } from 'angular2-arc-progress';

// Firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthGuard } from './services/auth-guard.service';
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
import { ErrorsComponent } from './errors/errors.component';
import { MainStarComponent } from './main-star/main-star.component';
import { UserProfileOptionsComponent } from './user-profile-options/user-profile-options.component';
import { ImportComponent } from './import/import.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { PaginationComponent } from './pagination/pagination.component';

const routes: Routes = [
  // Test (TODO remove)

  { path: 'fbtd', component: FireBaseTestDisplayComponent},
  { path: 'main-star', component: MainStarComponent, canActivate: [AuthGuard] },

  // Uunauthenticated routes
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'forgotten-password', component: ForgotPasswordComponent},
  { path: 'error', component: ErrorsComponent },

  // Authenticated routes
  { path: 'questionnaire', component: QuestionnaireComponent, canActivate: [AuthGuard]  },
  { path: 'task-manager', component: TaskManagerComponent, canActivate: [AuthGuard] },
  { path: 'styles', component: StyleGuideComponent, canActivate: [AuthGuard] },
  { path: 'compare', component: CompareStarComponent, canActivate: [AuthGuard] },
  { path: '', component: MyStarComponent, canActivate: [AuthGuard]},
  { path: 'user-profile', component: UserProfileOptionsComponent, canActivate: [AuthGuard] },
  { path: 'import', component: ImportComponent, canActivate: [AuthGuard] },
  { path: '**', component: ErrorsComponent, data: { error: 404 } }
];

import { ClickOutsideModule } from 'ng-click-outside';

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
    ForgotPasswordComponent,
    ErrorsComponent,
    MainStarComponent,
    UserProfileOptionsComponent,
    ImportComponent,
    SpinnerComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    Ng2ArcProgressModule,
    FormsModule,
    ClickOutsideModule,
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false,
        anchorScrolling: 'enabled'
      } // <-- debugging purposes only
      ),

      // Firebase imports
      AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), // imports firebase/app needed for everything
      AngularFirestoreModule, // imports firebase/firestore, only needed for database features
      AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    ],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
