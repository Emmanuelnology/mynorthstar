"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var chart_js_1 = require("chart.js");
var StarComponent = /** @class */ (function () {
    function StarComponent(cd) {
        this.cd = cd;
        this.size = '100%';
        this.chart = {};
    }
    StarComponent.prototype.makeStarUnique = function () {
        this.canvasID = this.getID();
    };
    StarComponent.prototype.guid = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };
    StarComponent.prototype.getID = function () {
        return 'canvas' + this.guid();
    };
    StarComponent.prototype.createChart = function () {
        var canvas = document.getElementById(this.canvasID);
        var ctx = canvas.getContext('2d');
        this.chart = new chart_js_1.Chart(ctx, {
            type: 'radar',
            data: {
                labels: this.data.labels,
                datasets: this.data.datasets
            },
            options: this.data.options
        });
    };
    StarComponent.prototype.redraw = function () {
        this.chart.update();
        console.log('Chart was updated');
    };
    StarComponent.prototype.ngAfterViewInit = function () {
        this.createChart();
    };
    StarComponent.prototype.ngOnInit = function () {
        this.makeStarUnique();
    };
    StarComponent.prototype.onResize = function (event) {
        this.redraw();
    };
    __decorate([
        core_1.Input()
    ], StarComponent.prototype, "data");
    __decorate([
        core_1.Input()
    ], StarComponent.prototype, "size");
    __decorate([
        core_1.HostListener('window:resize', ['$event'])
    ], StarComponent.prototype, "onResize");
    StarComponent = __decorate([
        core_1.Component({
            selector: 'app-star',
            templateUrl: './star.component.html',
            styleUrls: ['./star.component.scss']
        })
    ], StarComponent);
    return StarComponent;
}());
exports.StarComponent = StarComponent;
