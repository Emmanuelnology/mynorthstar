"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
// import { userInfo } from 'os';
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(afAuth, authService, router) {
        this.afAuth = afAuth;
        this.authService = authService;
        this.router = router;
        this.name = '';
        this.email = '';
        this.password = '';
        this.error = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerUser = function () {
        var _this = this;
        this.authService.registerUser(this.email, this.password).then(function () {
            _this.afAuth.auth.currentUser.updateProfile({
                displayName: _this.name,
                photoURL: 'https://www.telegraph.co.uk/content/dam/Pets/spark/royal-canin/tabby-kitten-small.jpg?imwidth=450'
            });
            _this.router.navigate(['/']);
        })["catch"](function (error) {
            _this.error = error.message;
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
        })
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
