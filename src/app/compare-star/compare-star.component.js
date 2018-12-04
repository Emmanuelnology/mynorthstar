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
var CompareStarComponent = /** @class */ (function () {
    function CompareStarComponent() {
        this.datasets = [];
        this.data = {
            datasets: [],
            labels: ['Career', 'Friends & Family', 'Happiness',
                'Health & Wellbeing', 'Home & Environment', 'Money',
                'Personal Growth', 'Relationships', 'Spirituality'],
            options: {
                legend: {
                    display: true,
                    labels: {
                        fontColor: 'white'
                    }
                },
                scale: {
                    pointLabels: {
                        display: true,
                        fontColor: 'white',
                        fontSize: 14
                    },
                    angleLines: {
                        color: '#b02062'
                    },
                    ticks: {
                        // maxTicksLimit: 5,
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
        this.pastData = [
            {
                data: [9, 2, 8, 3, 9, 2, 8, 4, 2],
                label: 'Nov 18',
                fill: false,
                lineTension: 0.3,
                borderColor: '#b02062',
                pointBorderColor: '#6ecbd3',
                pointRadius: 5,
                pointBackgroundColor: '#37234f'
            },
            {
                data: [1, 6, 4, 3, 8, 6, 3, 2, 6],
                label: 'Oct 18',
                fill: false,
                lineTension: 0.3,
                borderColor: '#6ecbd3',
                pointBorderColor: '#6ecbd3',
                pointRadius: 5,
                pointBackgroundColor: '#37234f'
            },
            {
                data: [3, 7, 8, 4, 6, 4, 3, 2, 5],
                label: 'Sep 18',
                fill: false,
                lineTension: 0.3,
                borderColor: '#65449b',
                pointBorderColor: '#6ecbd3',
                pointRadius: 5,
                pointBackgroundColor: '#37234f'
            },
            {
                data: [3, 6, 6, 7, 4, 8, 3, 6, 3],
                label: 'Aug 18',
                fill: false,
                lineTension: 0.3,
                borderColor: '#00ffd2',
                pointBorderColor: '#6ecbd3',
                pointRadius: 5,
                pointBackgroundColor: '#37234f'
            }
        ];
        this.data.datasets.push({
            data: [1, 6, 2, 6, 1, 5, 2, 7, 9],
            label: 'Current',
            fill: true,
            lineTension: 0.3,
            borderColor: 'white',
            pointBorderColor: '#6ecbd3',
            pointRadius: 5,
            pointBackgroundColor: '#37234f'
        });
    }
    CompareStarComponent.prototype.ngOnInit = function () {
    };
    CompareStarComponent.prototype.ngAfterViewInit = function () {
    };
    CompareStarComponent.prototype.redraw = function () {
        this.starViewChild.redraw();
    };
    CompareStarComponent.prototype.removeData = function () {
        this.data.datasets.splice(1);
        this.redraw();
    };
    CompareStarComponent.prototype.addData = function (activeIndex) {
        this.removeData();
        for (var _i = 0, activeIndex_1 = activeIndex; _i < activeIndex_1.length; _i++) {
            var index = activeIndex_1[_i];
            this.data.datasets.push(this.pastData[index]);
        }
        this.starViewChild.data.datasets = this.data.datasets;
        this.redraw();
    };
    __decorate([
        core_1.ViewChild(star_component_1.StarComponent)
    ], CompareStarComponent.prototype, "starViewChild");
    CompareStarComponent = __decorate([
        core_1.Component({
            selector: 'app-compare-star',
            templateUrl: './compare-star.component.html',
            styleUrls: ['./compare-star.component.scss']
        })
    ], CompareStarComponent);
    return CompareStarComponent;
}());
exports.CompareStarComponent = CompareStarComponent;
