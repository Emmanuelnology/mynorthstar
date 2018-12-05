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
    function QuestionnaireComponent(rand, questionnaireService, router, afs) {
        this.rand = rand;
        this.questionnaireService = questionnaireService;
        this.router = router;
        this.questions = [];
        this.questions = this.rand.randomiseOrder(this.questions);
        this.questionnaireFromFirebase = afs.collection('questionnaire').valueChanges();
    }
    QuestionnaireComponent.prototype.ngOnInit = function () {
    };
    QuestionnaireComponent.prototype.getSliderColor = function (value) {
        if (value <= 2) {
            var blue = 129 + 31.5 * value;
            return 'rgb(236, 0, ' + blue + ')';
        }
        if (value <= 6 && value > 2) {
            var red = 236 - (value - 3) * 59;
            return 'rgb(' + red + ', 0, 255)';
        }
        if (value > 6) {
            var green = 61.9 * value - 364;
            return 'rgb(0, ' + green + ', 210)';
        }
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
