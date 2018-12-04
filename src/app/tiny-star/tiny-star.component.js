"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var TinyStarComponent = /** @class */ (function () {
    function TinyStarComponent() {
        this.payload = {
            datasets: [{
                    data: [],
                    label: 'Me',
                    fill: true,
                    backgroundColor: 'white',
                    lineTension: 0.3,
                    borderColor: 'white',
                    pointBorderColor: 'white',
                    pointRadius: 0,
                    pointBackgroundColor: 'white'
                }],
            labels: [],
            options: {
                legend: {
                    display: false
                },
                scale: {
                    pointLabels: {
                        display: false,
                        fontColor: 'white',
                        fontSize: 14
                    },
                    angleLines: {
                        color: 'rgba(0, 0, 0, 0)'
                    },
                    ticks: {
                        display: false,
                        min: 0,
                        max: 10
                    },
                    gridLines: {
                        color: 'rgba(0, 0, 0, 0)'
                    }
                }
            }
        };
    }
    TinyStarComponent.prototype.ngOnInit = function () {
        this.payload.datasets[0].data = this.data;
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var d = _a[_i];
            this.payload.labels.push(d);
        }
    };
    __decorate([
        core_1.Input()
    ], TinyStarComponent.prototype, "data");
    __decorate([
        core_1.Input()
    ], TinyStarComponent.prototype, "size");
    TinyStarComponent = __decorate([
        core_1.Component({
            selector: 'app-tiny-star',
            templateUrl: './tiny-star.component.html',
            styleUrls: ['./tiny-star.component.scss']
        })
    ], TinyStarComponent);
    return TinyStarComponent;
}());
exports.TinyStarComponent = TinyStarComponent;
