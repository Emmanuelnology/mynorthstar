"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var AuthService = /** @class */ (function () {
    function AuthService(db, afAuth) {
        this.db = db;
        this.afAuth = afAuth;
    }
    Object.defineProperty(AuthService.prototype, "user", {
        get: function () {
            return this.afAuth.auth.currentUser;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.logIn = function (email, password) {
        this.afAuth.auth.signInWithEmailAndPassword(email, password);
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.logOut = function () {
        return this.afAuth.auth.signOut();
    };
    AuthService.prototype.registerUser = function (email, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.resetPassword = function (email) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    };
    AuthService.prototype.changeName = function (newName) {
        this.afAuth.auth.currentUser.updateProfile({
            displayName: newName,
            photoURL: this.user.photoURL
        });
    };
    AuthService.prototype.changeEmailAddress = function (newEmail) {
        return this.afAuth.auth.currentUser.updateEmail(newEmail);
    };
    AuthService.prototype.changePassword = function (newPassword) {
        return this.afAuth.auth.currentUser.updatePassword(newPassword);
    };
    AuthService.prototype.verifyEmailAddress = function () {
        return this.afAuth.auth.currentUser.sendEmailVerification();
    };
    AuthService.prototype.changeImage = function (newImage) {
        this.afAuth.auth.currentUser.updateProfile({
            displayName: this.user.displayName,
            photoURL: newImage
        });
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
