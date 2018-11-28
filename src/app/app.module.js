"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
// Imported Components
var angular2_arc_progress_1 = require("angular2-arc-progress");
// Firebase imports
// If you have errors, check slack chat, I've posted a solution - George.
var fire_1 = require("@angular/fire");
var firestore_1 = require("@angular/fire/firestore");
var auth_1 = require("@angular/fire/auth");
var environment_1 = require("../environments/environment");
// Components
var app_component_1 = require("./app.component");
var layout_auth_component_1 = require("./layout-auth/layout-auth.component");
var register_component_1 = require("./register/register.component");
var f_password_component_1 = require("./f-password/f-password.component");
var questionnaire_component_1 = require("./questionnaire/questionnaire.component");
var results_component_1 = require("./results/results.component");
var star_component_1 = require("./star/star.component");
var task_manager_component_1 = require("./task-manager/task-manager.component");
var layout_app_component_1 = require("./layout-app/layout-app.component");
var create_task_component_1 = require("./create-task/create-task.component");
var task_list_component_1 = require("./task-list/task-list.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var fire_base_test_display_component_1 = require("./fire-base-test-display/fire-base-test-display.component");
var progress_arc_component_1 = require("./progress-arc/progress-arc.component");
var routes = [
    { path: 'questionnaire', component: questionnaire_component_1.QuestionnaireComponent },
    { path: 'results', component: results_component_1.ResultsComponent },
    { path: 'forgot-password', component: f_password_component_1.FPasswordComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'layout-app', component: layout_app_component_1.LayoutAppComponent },
    { path: 'task-manager', component: task_manager_component_1.TaskManagerComponent },
    { path: 'fbtd', component: fire_base_test_display_component_1.FireBaseTestDisplayComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                layout_auth_component_1.LayoutAuthComponent,
                register_component_1.RegisterComponent,
                f_password_component_1.FPasswordComponent,
                questionnaire_component_1.QuestionnaireComponent,
                results_component_1.ResultsComponent,
                star_component_1.StarComponent,
                task_manager_component_1.TaskManagerComponent,
                layout_app_component_1.LayoutAppComponent,
                create_task_component_1.CreateTaskComponent,
                task_list_component_1.TaskListComponent,
                dashboard_component_1.DashboardComponent,
                fire_base_test_display_component_1.FireBaseTestDisplayComponent,
                progress_arc_component_1.ProgressArcComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                angular2_arc_progress_1.Ng2ArcProgressModule,
                router_1.RouterModule.forRoot(routes, { enableTracing: true } // <-- debugging purposes only
                ),
                // Firebase imports
                fire_1.AngularFireModule.initializeApp(environment_1.environment.firebase, 'my-app-name'),
                firestore_1.AngularFirestoreModule,
                auth_1.AngularFireAuthModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
