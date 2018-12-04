"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var app_1 = require("firebase/app");
// https://stackoverflow.com/questions/38559457/firebase-v3-updateprofile-method
var FireBaseTestDisplayComponent = /** @class */ (function () {
    function FireBaseTestDisplayComponent(db, afAuth, authService) {
        this.db = db;
        this.afAuth = afAuth;
        this.authService = authService;
    }
    FireBaseTestDisplayComponent.prototype.ngAfterContentInit = function () {
        this.items = this.db.collection('items').valueChanges();
        this.user = this.afAuth.user;
    };
    FireBaseTestDisplayComponent.prototype.logIn = function () {
        this.afAuth.auth.signInWithPopup(new app_1.auth.GoogleAuthProvider());
    };
    FireBaseTestDisplayComponent.prototype.logInEmail = function (email, password) {
        this.authService.logIn(email, password).then(function () {
            console.log('Redirect to home page');
        })["catch"](function (error) {
            console.log(error);
        });
    };
    FireBaseTestDisplayComponent.prototype.logOut = function () {
        this.authService.logOut();
        console.log('Redirect to login page');
    };
    FireBaseTestDisplayComponent.prototype.registerUser = function (email, password) {
        this.authService.registerUser(email, password).then(function () {
            console.log('Redirect to home page');
        })["catch"](function (error) {
            console.log(error);
        });
    };
    FireBaseTestDisplayComponent.prototype.resetPassword = function (email) {
        this.authService.resetPassword(email).then(function () {
            console.log('Redirect to  page');
        })["catch"](function (error) {
            console.log(error);
        });
    };
    FireBaseTestDisplayComponent = __decorate([
        core_1.Component({
            selector: 'app-fire-base-test-display',
            templateUrl: './fire-base-test-display.component.html',
            styleUrls: ['./fire-base-test-display.component.scss']
        })
    ], FireBaseTestDisplayComponent);
    return FireBaseTestDisplayComponent;
}());
exports.FireBaseTestDisplayComponent = FireBaseTestDisplayComponent;
