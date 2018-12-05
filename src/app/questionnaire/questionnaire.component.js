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
    function QuestionnaireComponent(rand, questionnaireService, router, afs, uploadToFirebase) {
        this.rand = rand;
        this.questionnaireService = questionnaireService;
        this.router = router;
        this.uploadToFirebase = uploadToFirebase;
        this.questions = [];
    }
    QuestionnaireComponent.prototype.ngOnInit = function () {
        this.getQuestions();
    };
    QuestionnaireComponent.prototype.getQuestions = function () {
        var _this = this;
        this.uploadToFirebase.getAllQuestions().subscribe(function (questions) {
            _this.questions = _this.rand.randomiseOrder(questions);
            console.log('HI', questions);
        });
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
        var _this = this;
        var results = this.questionnaireService.getResults(this.questions);
        this.uploadToFirebase.upload(results)
            .then(function () {
            _this.router.navigate(['/']);
            console.log(results);
        })["catch"](function (error) {
            // display error message
        });
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
