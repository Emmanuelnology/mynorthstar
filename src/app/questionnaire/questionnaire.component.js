"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var QuestionnaireComponent = /** @class */ (function () {
    function QuestionnaireComponent() {
        this.questions = [
            {
                title: 'Question 1',
                number: 1,
                content: '1. I do not feel particularly pleased with the way I am',
                score: undefined,
                weight: 2,
                category: 'Happiness',
                positive: false
            },
            {
                title: 'Question 2',
                number: 2,
                content: '2. I feel that life is very rewarding',
                score: undefined,
                weight: 5,
                category: 'Happiness'
            },
            {
                title: 'Question 3',
                number: 3,
                content: '3. I rarely wake up feeling rested',
                score: undefined,
                weight: 5,
                category: 'Happiness',
                positive: false
            },
            {
                title: 'Question 4',
                number: 4,
                content: '4. I laugh a lot',
                score: undefined,
                weight: 2,
                category: 'Happiness'
            },
            {
                title: 'Question 5',
                number: 5,
                content: '5. I could handle a major unexpected expense',
                score: undefined,
                weight: 5,
                category: 'Finances'
            },
            {
                title: 'Question 6',
                number: 6,
                content: '6. I can enjoy life because of the way I’m managing my money',
                score: undefined,
                weight: 2,
                category: 'Finances'
            },
            {
                title: 'Question 7',
                number: 7,
                content: '7. During your conversations, do you find yourself often defending your actions',
                score: undefined,
                weight: 6,
                category: 'Relationships',
                positive: false
            }
        ];
    }
    QuestionnaireComponent.prototype.ngOnInit = function () {
    };
    QuestionnaireComponent = __decorate([
        core_1.Component({
            selector: 'app-questionnaire',
            templateUrl: './questionnaire.component.html',
            styleUrls: ['./questionnaire.component.scss']
        })
    ], QuestionnaireComponent);
    return QuestionnaireComponent;
}());
exports.QuestionnaireComponent = QuestionnaireComponent;
