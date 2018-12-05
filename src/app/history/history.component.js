"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var HistoryComponent = /** @class */ (function () {
    function HistoryComponent() {
        this.checked = new core_1.EventEmitter();
        this.pastDataProfile = [
            { date: 'Nov 18', score: '6.35', isActive: false },
            { date: 'Oct 18', score: '5.11', isActive: false },
            { date: 'Sep 18', score: '4.21', isActive: false },
            { date: 'Aug 18', score: '4.00', isActive: false },
            { date: 'Jul 18', score: '9.00', isActive: false }
        ];
    }
    HistoryComponent.prototype.findActive = function () {
        var activeIndex = [];
        for (var index in this.pastDataProfile) {
            if (this.pastDataProfile[index].isActive) {
                activeIndex.push(parseInt(index, 10));
            }
        }
        this.checked.emit(activeIndex);
    };
    HistoryComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Output()
    ], HistoryComponent.prototype, "checked");
    HistoryComponent = __decorate([
        core_1.Component({
            selector: 'app-history',
            templateUrl: './history.component.html',
            styleUrls: ['./history.component.scss']
        })
    ], HistoryComponent);
    return HistoryComponent;
}());
exports.HistoryComponent = HistoryComponent;
