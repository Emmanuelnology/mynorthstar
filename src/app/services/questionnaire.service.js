"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
exports.exampleQuestions = [
    {
        title: 'Question 1',
        number: 1,
        content: 'I do not feel particularly pleased with the nology help system',
        score: 3,
        weight: 2,
        category: 'Happiness'
    },
    {
        title: 'Question 2',
        number: 2,
        content: 'I feel that Craig is ignoring us',
        score: 6,
        weight: 5,
        category: 'Personal growth',
        positive: false
    },
    {
        title: 'Question 3',
        number: 3,
        content: 'I rarely wake up feeling rested',
        score: 10,
        weight: 5,
        category: 'Friends and family'
    },
    {
        title: 'Question 4',
        number: 4,
        content: 'I laugh a lot',
        score: 1,
        weight: 2,
        category: 'Friends and family'
    },
    {
        title: 'Question 5',
        number: 5,
        content: 'I DO NOT laugh a lot',
        score: 3,
        weight: 5,
        category: 'Spirituality'
    },
    {
        title: 'Question 6',
        number: 6,
        content: 'I am getting paid to go to nology',
        score: 1,
        weight: 6,
        category: 'Money'
    },
    {
        title: 'Question 7',
        number: 7,
        content: 'I work at nationwide',
        score: 9,
        weight: 1,
        category: 'Career'
    },
    {
        title: 'Question 8',
        number: 8,
        content: 'I have a partner',
        score: 8,
        weight: 7,
        category: 'Romance and relationships'
    },
    {
        title: 'Question 9',
        number: 9,
        content: 'I laugh a lot',
        score: 1,
        weight: 4,
        category: 'Happiness'
    },
    {
        title: 'Question 10',
        number: 10,
        content: 'I dont have netflix',
        score: 3,
        weight: 2,
        category: 'Home and environment'
    },
    {
        title: 'Question 11',
        number: 11,
        content: 'I dont eat out everyday',
        score: 8,
        weight: 2,
        category: 'Health and wellbeing'
    },
];
var QuestionnaireService = /** @class */ (function () {
    function QuestionnaireService() {
        this.decimalPlaces = 2;
    }
    QuestionnaireService.prototype.calculateWeightedAverage = function (array) {
        var weightTimesScoreSum = 0;
        var weightSum = 0;
        for (var categoryIndex in array) {
            if (array.hasOwnProperty(categoryIndex)) {
                weightTimesScoreSum += array[categoryIndex].score * array[categoryIndex].weight;
                weightSum += array[categoryIndex].weight;
            }
        }
        var averageScore = weightTimesScoreSum / weightSum;
        var roundedAverage = this.roundNumber(averageScore, this.decimalPlaces);
        return this.decimalPadding(roundedAverage, this.decimalPlaces);
    };
    QuestionnaireService.prototype.createCatOb = function (question) {
        var catOb = { score: 0, weight: 0 };
        catOb.score = question.score;
        catOb.weight = question.weight;
        return catOb;
    };
    QuestionnaireService.prototype.getCategories = function (questionArray) {
        var foundCategories = [];
        for (var questionIndex in questionArray) {
            if (questionArray.hasOwnProperty(questionIndex)) {
                var currentCategory = questionArray[questionIndex].category;
                if (foundCategories.indexOf(currentCategory) < 0) {
                    foundCategories.push(currentCategory);
                }
            }
        }
        return foundCategories.sort();
    };
    QuestionnaireService.prototype.roundNumber = function (number, decimals) {
        var powerOfTen = Math.pow(10, decimals);
        var bigNumber = Math.floor(number * powerOfTen);
        return bigNumber / powerOfTen;
    };
    QuestionnaireService.prototype.decimalPadding = function (number, decimals) {
        if (number === Math.floor(number)) {
            // let decimalisation =  number + "." + ('1').repeat(decimals);
            // return number.toFixed(decimals);
            return number;
        }
        return number;
    };
    QuestionnaireService.prototype.makePositive = function (questionArray) {
        for (var questionIndex in questionArray) {
            if (questionArray.hasOwnProperty(questionIndex)) {
                var currentQuestion = questionArray[questionIndex];
                if (currentQuestion.hasOwnProperty('positive')) {
                    currentQuestion.score = 10 - currentQuestion.score;
                }
            }
        }
        return questionArray;
    };
    QuestionnaireService.prototype.getResults = function (initialResults) {
        var positiveResults = this.makePositive(initialResults);
        var foundCategories = this.getCategories(positiveResults);
        var results = [];
        for (var _i = 0, foundCategories_1 = foundCategories; _i < foundCategories_1.length; _i++) {
            var categoryIndex = foundCategories_1[_i];
            var array = [];
            for (var questionIndex in positiveResults) {
                if (positiveResults[questionIndex].category === categoryIndex) {
                    var catOb = this.createCatOb(positiveResults[questionIndex]);
                    array.push(catOb);
                }
            }
            var average = {
                category: categoryIndex,
                categoryAverage: this.calculateWeightedAverage(array)
            };
            results = results.concat(average);
        }
        return results;
    };
    QuestionnaireService.prototype.overallAverage = function (results) {
        var sumOfResults = 0;
        for (var resultIndex in results) {
            if (results.hasOwnProperty(resultIndex)) {
                sumOfResults += results[resultIndex].categoryAverage;
            }
        }
        var average = sumOfResults / results.length;
        return this.roundNumber(average, this.decimalPlaces);
    };
    QuestionnaireService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], QuestionnaireService);
    return QuestionnaireService;
}());
exports.QuestionnaireService = QuestionnaireService;
