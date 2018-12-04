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
    function QuestionnaireComponent(rand, questionnaireService, router) {
        this.rand = rand;
        this.questionnaireService = questionnaireService;
        this.router = router;
        this.questions = [
            {
                title: 'Question 1',
                number: 1,
                question: 'I do not feel particularly pleased with the way I am',
                score: undefined,
                weight: 2,
                category: 'Happiness',
                positive: false
            },
            {
                title: 'Question 2',
                number: 2,
                question: 'I feel that life is very rewarding',
                score: undefined,
                weight: 5,
                category: 'Happiness',
                positive: true
            },
            {
                title: 'Question 3',
                number: 3,
                question: 'I rarely wake up feeling rested',
                score: undefined,
                weight: 5,
                category: 'Finance',
                positive: false
            },
            {
                title: 'Question 4',
                number: 4,
                question: 'I laugh a lot',
                score: undefined,
                weight: 2,
                category: 'Happiness',
                positive: true
            },
        ];
        this.questions = this.rand.randomiseOrder(this.questions);
    }
    QuestionnaireComponent.prototype.ngOnInit = function () {
    };
    QuestionnaireComponent.prototype.onSubmit = function () {
        // // check if any field is undefined
        // resort questions
        // this.questionnaireService.saveResults(this.questions)
        //     .then(() =>{
        //         // redirect to my star page
        //     })
        //     .catch( (error)=>{
        //         // display an error message
        //     });
        //
        // console.log(this.questions);
        var finalResults = this.questionnaireService.getResults(this.questions);
        console.log(finalResults);
        // if (finalResults.overallResult !== NaN) {
        //     this.router.navigate(['/']);
        //     console.log(finalResults);
        //     console.log("THIS IS WORKING")
        //     return finalResults;
        // } else {
        //     console.log("THIS IS WORKING")
        //     return finalResults;
        // }
        // if (finalResults.overallResult !== NaN) {
        this.router.navigate(['/']);
        //     console.log(finalResults);
        //     console.log("THIS IS WORKING")
        //     return finalResults;
        // } else {
        //     console.log("NOT WORKING");
        //     return finalResults;
        // }
        // let resultObject= {
        //     questionnaire = this.questions,
        //     results = this.resultService.getResults(this.questions)
        // }
        // save to firebase
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
