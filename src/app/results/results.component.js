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
var ResultsComponent = /** @class */ (function () {
    function ResultsComponent(questionnaireService) {
        this.questionnaireService = questionnaireService;
        this.questions = questionnaire_service_1.exampleQuestions;
        this.results = this.questionnaireService.getResults(this.questions);
        this.overallResult = this.questionnaireService.overallAverage(this.results);
    }
    ResultsComponent.prototype.ngOnInit = function () {
    };
    ResultsComponent = __decorate([
        core_1.Component({
            selector: 'app-results',
            templateUrl: './results.component.html',
            styleUrls: ['./results.component.scss']
        })
    ], ResultsComponent);
    return ResultsComponent;
}());
exports.ResultsComponent = ResultsComponent;
