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
var Colors;
(function (Colors) {
    Colors["Red"] = "rgb(255,0,110)";
    Colors["Purple"] = "rgb(112,49,238)";
    Colors["Blue"] = "rgb(18,148,194)";
    Colors["Turquoise"] = "rgb(0,255,213)";
})(Colors || (Colors = {}));
var StarComponent = /** @class */ (function () {
    function StarComponent(cd) {
        this.cd = cd;
        this.showLabels = true;
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
    StarComponent.prototype.createRadarPointColors = function (data) {
        var dataSetColors = [];
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                if (data[key] < 2) {
                    dataSetColors[key] = Colors.Red;
                }
                else if (data[key] < 6) {
                    dataSetColors[key] = Colors.Purple;
                }
                else if (data[key] < 9) {
                    dataSetColors[key] = Colors.Blue;
                }
                else {
                    dataSetColors[key] = Colors.Turquoise;
                }
            }
        }
        return dataSetColors;
    };
    StarComponent.prototype.createGradient = function (ctx, parentElement) {
        var width = parentElement.offsetWidth;
        var height = width * 0.5;
        console.log(height);
        var gradient = ctx.createRadialGradient(width / 2, height / 2, 20, width / 2, height / 2, width / 4);
        gradient.addColorStop(0, Colors.Red);
        gradient.addColorStop(0.3, Colors.Purple);
        gradient.addColorStop(0.7, Colors.Blue);
        gradient.addColorStop(1, Colors.Turquoise);
        return gradient;
    };
    StarComponent.prototype.overrideGradient = function () {
        var parentElement = document.getElementById(this.canvasID + '-parent');
        var gradient = this.createGradient(this.ctx, parentElement);
        var pointColors = this.createRadarPointColors(this.data.datasets[0].data);
        this.data.datasets[0].borderColor = gradient;
        this.data.datasets[0].pointBackgroundColor = pointColors;
        this.data.datasets[0].pointBorderColor = 'transparent';
        this.data.datasets[0].fill = true;
        this.data.datasets[0].backgroundColor = 'rgba(200,200,200,0.2)';
    };
    StarComponent.prototype.needsGradient = function () {
        return (this.data.datasets.length === 1);
    };
    StarComponent.prototype.createChart = function () {
        var element = document.getElementById(this.canvasID);
        this.canvas = element;
        this.ctx = this.canvas.getContext('2d');
        if (this.needsGradient()) {
            this.overrideGradient();
        }
        this.chart = new chart_js_1.Chart(this.ctx, {
            type: 'radar',
            data: {
                labels: this.data.labels,
                datasets: this.data.datasets
            },
            options: this.data.options
        });
    };
    StarComponent.prototype.redraw = function () {
        if (this.needsGradient()) {
            this.overrideGradient();
        }
        // No other way to change charts other than this. Maybe you can help?
        this.chart.options.scale.pointLabels.display = (window.innerWidth > 768);
        this.chart.update();
        console.log('Chart was updated');
    };
    StarComponent.prototype.ngAfterViewInit = function () {
        this.createChart();
        this.redraw();
    };
    StarComponent.prototype.ngOnInit = function () {
        this.makeStarUnique();
    };
    StarComponent.prototype.onResize = function (event) {
        this.redraw();
    };
    __decorate([
        core_1.Input()
    ], StarComponent.prototype, "showLabels");
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
