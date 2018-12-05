"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var main_star_component_1 = require("../main-star/main-star.component");
// import { renderDetachView } from '@angular/core/src/view/view_attach';
// import { viewAttached } from '@angular/core/src/render3/instructions';
var CompareStarComponent = /** @class */ (function () {
    function CompareStarComponent() {
        this.currentData = { label: 'remove', data: [3, 9, 6, 8, 3, 9, 4, 9, 5] };
        this.emptyData = { label: 'remove', data: [] };
        this.animation = 0;
        this.currentScore = 7.67;
        this.data = {
            datasets: [],
            labels: ['Career', 'Friends & Family', 'Happiness',
                'Health & Wellbeing', 'Home & Environment', 'Money',
                'Personal Growth', 'Relationships', 'Spirituality']
        };
        this.pastData = [
            { label: 'Nov 18', data: [2, 7, 5, 6, 3, 8, 3, 7, 3] },
            { label: 'Oct 18', data: [1, 6, 4, 5, 2, 7, 3, 6, 2] },
            { label: 'Sep 18', data: [2, 5, 3, 4, 1, 6, 2, 5, 2] },
            { label: 'Aug 18', data: [1, 4, 2, 3, 2, 5, 1, 3, 2] },
            { label: 'Jul 18', data: [1, 4, 1, 3, 1, 4, 1, 3, 1] }
        ];
        this.data.datasets.push(this.currentData);
    }
    CompareStarComponent.prototype.ngOnInit = function () {
    };
    CompareStarComponent.prototype.ngAfterViewInit = function () {
    };
    CompareStarComponent.prototype.redraw = function () {
        this.mainStarViewChild.redraw();
    };
    CompareStarComponent.prototype.editData = function () {
        this.data.datasets = [
            this.currentData,
            this.emptyData,
            this.emptyData,
            this.emptyData,
            this.emptyData,
            this.emptyData
        ];
    };
    CompareStarComponent.prototype.addRemoveData = function (activeIndex) {
        this.editData();
        if (activeIndex.length !== 0) {
            this.data.datasets[0].label = 'Current';
        }
        else {
            this.data.datasets[0].label = 'remove';
        }
        for (var _i = 0, activeIndex_1 = activeIndex; _i < activeIndex_1.length; _i++) {
            var index = activeIndex_1[_i];
            this.data.datasets[index + 1] = this.pastData[index];
        }
        this.mainStarViewChild.starData = this.data.datasets;
        this.redraw();
    };
    __decorate([
        core_1.ViewChild(main_star_component_1.MainStarComponent)
    ], CompareStarComponent.prototype, "mainStarViewChild");
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
