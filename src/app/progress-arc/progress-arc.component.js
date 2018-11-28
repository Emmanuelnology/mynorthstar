"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ProgressArcComponent = /** @class */ (function () {
    function ProgressArcComponent() {
    }
    ProgressArcComponent.prototype.ngOnInit = function () {
        // this.score = 7.6;
    };
    __decorate([
        core_1.Input()
    ], ProgressArcComponent.prototype, "score");
    __decorate([
        core_1.Input()
    ], ProgressArcComponent.prototype, "color");
    ProgressArcComponent = __decorate([
        core_1.Component({
            selector: 'app-progress-arc',
            templateUrl: './progress-arc.component.html',
            styleUrls: ['./progress-arc.component.scss']
        })
    ], ProgressArcComponent);
    return ProgressArcComponent;
}());
exports.ProgressArcComponent = ProgressArcComponent;
