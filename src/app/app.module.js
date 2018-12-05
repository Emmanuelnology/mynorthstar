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
var forms_1 = require("@angular/forms");
// Imported Components
var angular2_arc_progress_1 = require("angular2-arc-progress");
// Firebase imports
var fire_1 = require("@angular/fire");
var firestore_1 = require("@angular/fire/firestore");
var auth_1 = require("@angular/fire/auth");
var auth_guard_service_1 = require("./services/auth-guard.service");
var environment_1 = require("../environments/environment");
// Components
var app_component_1 = require("./app.component");
var layout_auth_component_1 = require("./layout-auth/layout-auth.component");
var register_component_1 = require("./register/register.component");
var questionnaire_component_1 = require("./questionnaire/questionnaire.component");
var my_star_component_1 = require("./my-star/my-star.component");
var star_component_1 = require("./star/star.component");
var task_manager_component_1 = require("./task-manager/task-manager.component");
var layout_app_component_1 = require("./layout-app/layout-app.component");
var create_task_component_1 = require("./create-task/create-task.component");
var task_list_component_1 = require("./task-list/task-list.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var fire_base_test_display_component_1 = require("./fire-base-test-display/fire-base-test-display.component");
var progress_arc_component_1 = require("./progress-arc/progress-arc.component");
var style_guide_component_1 = require("./style-guide/style-guide.component");
var login_component_1 = require("./login/login.component");
var tiny_star_component_1 = require("./tiny-star/tiny-star.component");
var compare_star_component_1 = require("./compare-star/compare-star.component");
var history_component_1 = require("./history/history.component");
var nav_component_1 = require("./nav/nav.component");
var forgot_password_component_1 = require("./forgot-password/forgot-password.component");
var errors_component_1 = require("./errors/errors.component");
var main_star_component_1 = require("./main-star/main-star.component");
var user_profile_options_component_1 = require("./user-profile-options/user-profile-options.component");
var routes = [
    // Test (TODO remove)
    { path: 'fbtd', component: fire_base_test_display_component_1.FireBaseTestDisplayComponent },
    // Uunauthenticated routes
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'forgotten-password', component: forgot_password_component_1.ForgotPasswordComponent },
    // Authenticated routes
    { path: 'questionnaire', component: questionnaire_component_1.QuestionnaireComponent, canActivate: [auth_guard_service_1.AuthGuard] },
    { path: 'task-manager', component: task_manager_component_1.TaskManagerComponent, canActivate: [auth_guard_service_1.AuthGuard] },
    { path: 'styles', component: style_guide_component_1.StyleGuideComponent, canActivate: [auth_guard_service_1.AuthGuard] },
    { path: 'compare', component: compare_star_component_1.CompareStarComponent, canActivate: [auth_guard_service_1.AuthGuard] },
    { path: '', component: my_star_component_1.MyStarComponent, canActivate: [auth_guard_service_1.AuthGuard] },
    { path: 'error', component: errors_component_1.ErrorsComponent },
    { path: 'main-star', component: main_star_component_1.MainStarComponent },
    { path: 'user-profile', component: user_profile_options_component_1.UserProfileOptionsComponent },
    { path: '**', component: errors_component_1.ErrorsComponent, data: { error: 404 } }
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
                questionnaire_component_1.QuestionnaireComponent,
                my_star_component_1.MyStarComponent,
                star_component_1.StarComponent,
                task_manager_component_1.TaskManagerComponent,
                layout_app_component_1.LayoutAppComponent,
                create_task_component_1.CreateTaskComponent,
                task_list_component_1.TaskListComponent,
                dashboard_component_1.DashboardComponent,
                fire_base_test_display_component_1.FireBaseTestDisplayComponent,
                progress_arc_component_1.ProgressArcComponent,
                style_guide_component_1.StyleGuideComponent,
                login_component_1.LoginComponent,
                tiny_star_component_1.TinyStarComponent,
                compare_star_component_1.CompareStarComponent,
                history_component_1.HistoryComponent,
                nav_component_1.NavComponent,
                forgot_password_component_1.ForgotPasswordComponent,
                errors_component_1.ErrorsComponent,
                main_star_component_1.MainStarComponent,
                user_profile_options_component_1.UserProfileOptionsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                angular2_arc_progress_1.Ng2ArcProgressModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(routes, { enableTracing: true } // <-- debugging purposes only
                ),
                // Firebase imports
                fire_1.AngularFireModule.initializeApp(environment_1.environment.firebase, 'my-app-name'),
                firestore_1.AngularFirestoreModule,
                auth_1.AngularFireAuthModule,
            ],
            providers: [auth_guard_service_1.AuthGuard],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
