"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var MainStarComponent = /** @class */ (function () {
    function MainStarComponent() {
        this.showLabels = true;
        this.colors = ['white', 'red', 'blue', 'green'];
        this.outputData = {
            datasets: [],
            labels: [],
            options: {
                tooltips: {
                    backgroundColor: 'rgba(	176, 32, 98, 0.7)'
                },
                legend: {
                    display: false
                },
                scale: {
                    pointLabels: {
                        fontFamily: 'nunito',
                        display: true,
                        fontColor: 'white',
                        fontSize: 14
                    },
                    angleLines: {
                        color: '#b02062'
                    },
                    ticks: {
                        fontFamily: 'nunito',
                        maxTicksLimit: 5,
                        display: false,
                        min: 0,
                        max: 10
                    },
                    gridLines: {
                        color: '#777'
                    }
                }
            }
        };
    }
    MainStarComponent.prototype.ngOnInit = function () {
        this.outputData.options.scale.pointLabels.display = this.showLabels;
        this.outputData.labels = this.starLabels;
        for (var dataIndex in this.starData) {
            if (this.starData.hasOwnProperty(dataIndex)) {
                var dataset = {
                    data: this.starData[dataIndex],
                    label: '',
                    fill: false,
                    lineTension: 0.3,
                    borderColor: this.colors[dataIndex],
                    pointBorderColor: 'white',
                    pointRadius: 3,
                    pointBackgroundColor: 'white'
                };
                this.outputData.datasets.push(dataset);
            }
        }
    };
    __decorate([
        core_1.Input()
    ], MainStarComponent.prototype, "showLabels");
    __decorate([
        core_1.Input()
    ], MainStarComponent.prototype, "starData");
    __decorate([
        core_1.Input()
    ], MainStarComponent.prototype, "starLabels");
    MainStarComponent = __decorate([
        core_1.Component({
            selector: 'app-main-star',
            templateUrl: './main-star.component.html',
            styleUrls: ['./main-star.component.scss']
        })
    ], MainStarComponent);
    return MainStarComponent;
}());
exports.MainStarComponent = MainStarComponent;
