"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var questionnaire_service_1 = require("../services/questionnaire.service");
var main_star_component_1 = require("../main-star/main-star.component");
var MyStarComponent = /** @class */ (function () {
    function MyStarComponent(questionnaireService, authService, firebase) {
        this.questionnaireService = questionnaireService;
        this.authService = authService;
        this.firebase = firebase;
        this.questions = questionnaire_service_1.exampleQuestions;
        this.datasets = [];
        this.labels = [];
        this.user = authService.user;
        // console.log("results are", this.results)
        // const getAllResults = this.firebase.restructureDocsInCollection(this.results);
    }
    MyStarComponent.prototype.getResults = function () {
        this.firebase.getAllResults().subscribe((this.results));
        console.log('Results:', this.getResults());
    };
    MyStarComponent.prototype.restructureData = function (results) {
        var data = {
            data: [],
            label: 'My Star'
        };
        for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
            var result = results_1[_i];
            this.labels.push(result.categoryName);
            data.data.push(Math.round(result.categoryAverage * 100) / 100);
        }
        this.datasets.push(data);
    };
    MyStarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firebase.getRecent(this.user, 1).subscribe(function (results) {
            if (results.length > 0) {
                _this.restructureData(results[0].categoryResults);
                _this.mainStarViewChild.starData[0].data = _this.datasets[0].data;
                _this.mainStarViewChild.redraw();
            }
        });
    };
    __decorate([
        core_1.ViewChild(main_star_component_1.MainStarComponent)
    ], MyStarComponent.prototype, "mainStarViewChild");
    MyStarComponent = __decorate([
        core_1.Component({
            selector: 'app-my-star',
            templateUrl: './my-star.component.html',
            styleUrls: ['./my-star.component.scss']
        })
    ], MyStarComponent);
    return MyStarComponent;
}());
exports.MyStarComponent = MyStarComponent;
