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
var MyStarComponent = /** @class */ (function () {
    function MyStarComponent(questionnaireService) {
        this.questionnaireService = questionnaireService;
        this.questions = questionnaire_service_1.exampleQuestions;
        this.data = {
            datasets: [],
            labels: []
        };
        this.results = this.questionnaireService.getResults(this.questions);
        this.overallResult = this.results.overallResult;
        this.data = this.restructureData(this.results.categoryResults);
    }
    MyStarComponent.prototype.restructureData = function (results) {
        var categories = [];
        var data = [];
        for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
            var result = results_1[_i];
            categories.push(result.categoryName);
            data.push(Math.round(result.categoryAverage * 100) / 100);
        }
        return {
            datasets: [data],
            labels: categories
        };
    };
    MyStarComponent.prototype.ngOnInit = function () {
    };
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
