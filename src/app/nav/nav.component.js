"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var NavComponent = /** @class */ (function () {
    function NavComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.logOut = function () {
        var _this = this;
        this.authService.logOut().then(function () {
            _this.router.navigate(['/login']);
        });
    };
    __decorate([
        core_1.Input()
    ], NavComponent.prototype, "menuIsVisible");
    NavComponent = __decorate([
        core_1.Component({
            selector: 'app-nav',
            templateUrl: './nav.component.html',
            styleUrls: ['./nav.component.scss']
        })
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
