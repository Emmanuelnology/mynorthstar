"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var star_component_1 = require("../star/star.component");
var MainStarComponent = /** @class */ (function () {
    function MainStarComponent() {
        this.animation = 500;
        this.showLegend = false;
        this.colors = ['white', 'red', 'blue', 'green'];
        this.outputData = {
            datasets: [],
            labels: [],
            options: {
                animation: { duration: 500 },
                tooltips: {
                    backgroundColor: 'rgba(	176, 32, 98, 0.7)'
                },
                layout: {
                    padding: {
                        left: 0,
                        top: 40,
                        right: 0,
                        bottom: 40
                    }
                },
                legend: {
                    display: true,
                    labels: {
                        fontColor: 'white',
                        filter: function (item) {
                            return !item.text.includes('remove');
                        }
                    }
                },
                scale: {
                    pointLabels: {
                        fontFamily: 'nunito',
                        display: true,
                        fontColor: 'white',
                        fontSize: 14
                    },
                    angleLines: {
                        color: 'rgba(33,64,103)'
                    },
                    ticks: {
                        fontFamily: 'nunito',
                        maxTicksLimit: 5,
                        display: false,
                        min: 0,
                        max: 10
                    },
                    gridLines: {
                        color: 'rgba(33,64,103)'
                    }
                }
            }
        };
    }
    MainStarComponent.prototype.ngOnInit = function () {
        this.outputData.labels = this.starLabels;
        this.outputData.options.animation = { duration: this.animation };
        this.outputData.options.legend.display = this.showLegend;
        this.createDatasets();
    };
    MainStarComponent.prototype.ngAfterViewInit = function () {
    };
    MainStarComponent.prototype.createDatasets = function () {
        for (var dataIndex in this.starData) {
            if (this.starData.hasOwnProperty(dataIndex)) {
                var dataset = {
                    data: this.starData[dataIndex].data,
                    label: this.starData[dataIndex].label,
                    fill: false,
                    lineTension: 0.3,
                    borderColor: this.colors[dataIndex],
                    borderWidth: 2,
                    pointBorderColor: 'white',
                    pointRadius: 3,
                    pointBackgroundColor: 'white'
                };
                this.outputData.datasets.push(dataset);
            }
        }
    };
    MainStarComponent.prototype.removeData = function () {
        this.outputData.datasets.splice(0);
    };
    MainStarComponent.prototype.redraw = function () {
        this.removeData();
        this.createDatasets();
        this.starViewChild.redraw();
    };
    __decorate([
        core_1.Input()
    ], MainStarComponent.prototype, "starData");
    __decorate([
        core_1.Input()
    ], MainStarComponent.prototype, "starLabels");
    __decorate([
        core_1.Input()
    ], MainStarComponent.prototype, "animation");
    __decorate([
        core_1.Input()
    ], MainStarComponent.prototype, "showLegend");
    __decorate([
        core_1.ViewChild(star_component_1.StarComponent)
    ], MainStarComponent.prototype, "starViewChild");
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
