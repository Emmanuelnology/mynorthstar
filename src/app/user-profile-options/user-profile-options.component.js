"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var UserProfileOptionsComponent = /** @class */ (function () {
    function UserProfileOptionsComponent(afAuth, authService, router) {
        this.afAuth = afAuth;
        this.authService = authService;
        this.router = router;
        this.newEmail = '';
        this.newPassword = '';
        this.successUpdateEmail = '';
        this.errorUpdateEmail = '';
        this.successChangePassword = '';
        this.errorChangePassword = '';
        this.user = authService.user;
    }
    UserProfileOptionsComponent.prototype.ngOnInit = function () {
    };
    UserProfileOptionsComponent.prototype.updateClientEmailAddress = function () {
        var _this = this;
        this.authService.changeEmailAddress(this.newEmail).then(function () {
            _this.successUpdateEmail = 'Email updated successfully, your new address is ' + _this.authService.user.email;
            _this.errorUpdateEmail = '';
        })["catch"](function (error) {
            _this.errorUpdateEmail = error.message;
            _this.successUpdateEmail = '';
        });
    };
    UserProfileOptionsComponent.prototype.updateClientPassword = function () {
        var _this = this;
        this.authService.changePassword(this.newPassword).then(function () {
            _this.successChangePassword = 'Password updated successfully';
            _this.errorChangePassword = '';
        })["catch"](function (error) {
            _this.errorChangePassword = error.message;
            _this.successChangePassword = '';
        });
    };
    UserProfileOptionsComponent = __decorate([
        core_1.Component({
            selector: 'app-user-profile-options',
            templateUrl: './user-profile-options.component.html',
            styleUrls: ['./user-profile-options.component.scss']
        })
    ], UserProfileOptionsComponent);
    return UserProfileOptionsComponent;
}());
exports.UserProfileOptionsComponent = UserProfileOptionsComponent;
