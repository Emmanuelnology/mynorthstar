"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
exports.exampleQuestions = [
    {
        title: 'Question 1',
        number: null,
        question: 'I do not feel particularly pleased with the way I am',
        score: 2,
        weight: 4,
        category: 'Happiness',
        positive: false
    },
    {
        title: 'Question 2',
        number: null,
        question: 'I am classed as tall',
        score: 4,
        weight: 5,
        category: 'Personal growth',
        positive: true
    },
    {
        title: 'Question 3',
        number: null,
        question: 'I see my friends/family more than once a week',
        score: 4,
        weight: 3,
        category: 'Friends & Family',
        positive: true
    },
    {
        title: 'Question 4',
        number: null,
        question: 'I laugh a lot',
        score: 7,
        weight: 2,
        category: 'Happiness',
        positive: true
    },
    {
        title: 'Question 5',
        number: null,
        question: 'I do yoga',
        score: 3,
        weight: 1,
        category: 'Spirituality',
        positive: true
    },
    {
        title: 'Question 6',
        number: null,
        question: 'I worry about my financial situation',
        score: 1,
        weight: 3,
        category: 'Money',
        positive: false
    },
    {
        title: 'Question 7',
        number: null,
        question: 'I have a job which is relevant to my skill level',
        score: 9,
        weight: 4,
        category: 'Career',
        positive: true
    },
    {
        title: 'Question 8',
        number: null,
        question: 'I have a partner/ stable relationship',
        score: 8,
        weight: 7,
        category: 'Relationships',
        positive: true
    },
    {
        title: 'Question 9',
        number: null,
        question: 'I enjoy my job',
        score: 8,
        weight: 4,
        category: 'Happiness',
        positive: true
    },
    {
        title: 'Question 10',
        number: null,
        question: 'I watch Netflix often',
        score: 8,
        weight: 2,
        category: 'Home & Environment',
        positive: false
    },
    {
        title: 'Question 11',
        number: null,
        question: 'I regularly eat my five a day',
        score: 4,
        weight: 4,
        category: 'Health & Wellbeing',
        positive: true
    },
    {
        title: 'Question 12',
        number: null,
        question: 'I regularly exercise',
        score: 7,
        weight: 4,
        category: 'Health & Wellbeing',
        positive: true
    },
    {
        title: 'Question 13',
        number: null,
        question: 'My house is untidy',
        score: 7,
        weight: 4,
        category: 'Home & Environment',
        positive: false
    },
    {
        title: 'Question 14',
        number: null,
        question: 'I only see my friends at the travelodge',
        score: 4,
        weight: 2,
        category: 'Relationships',
        positive: false
    },
    {
        title: 'Question 15',
        number: null,
        question: 'I have savings',
        score: 6,
        weight: 5,
        category: 'Money',
        positive: true
    },
    {
        title: 'Question 16',
        number: null,
        question: 'I am good at networking',
        score: 4,
        weight: 2,
        category: 'Career',
        positive: true
    }
];
var QuestionnaireService = /** @class */ (function () {
    function QuestionnaireService(authService) {
        this.authService = authService;
        this.user = authService.user;
    }
    QuestionnaireService.prototype.getResults = function (questionArray) {
        // console.log(questionArray)
        var categoryAverages = this.getCategoryAverages(questionArray);
        var overallAverage = this.getOverallAverage(categoryAverages);
        var addDate = new Date();
        var userObject = this.createUserObject();
        var result = {
            categoryResults: categoryAverages,
            overallResult: overallAverage,
            date: addDate,
            user: userObject // createUser()
        };
        return result; // add
    };
    QuestionnaireService.prototype.createUserObject = function () {
        console.log('The user is ' + this.user);
        // const currentUser:IUser=this.auth.user;
        var currentUser = {
            uid: this.user.uid,
            displayName: this.user.displayName
        };
        return currentUser;
    };
    QuestionnaireService.prototype.getCategoryAverages = function (questionArray) {
        var positiveAnswers = this.makePositive(questionArray);
        var foundCategories = this.getCategories(positiveAnswers);
        var categoryAverages = [];
        for (var _i = 0, foundCategories_1 = foundCategories; _i < foundCategories_1.length; _i++) {
            var category = foundCategories_1[_i];
            var sameCategoryArray = [];
            sameCategoryArray = this.createCategoryObjects(positiveAnswers, category, sameCategoryArray);
            var average = {
                categoryName: category,
                categoryAverage: this.calculateWeightedAverage(sameCategoryArray)
            };
            categoryAverages = categoryAverages.concat(average);
        }
        return categoryAverages;
    };
    QuestionnaireService.prototype.makePositive = function (questionArray) {
        for (var _i = 0, questionArray_1 = questionArray; _i < questionArray_1.length; _i++) {
            var question = questionArray_1[_i];
            if (question.positive === false) {
                question.score = 10 - question.score;
                question.positive = true;
            }
        }
        return questionArray;
    };
    QuestionnaireService.prototype.getCategories = function (questionArray) {
        var foundCategories = [];
        for (var _i = 0, questionArray_2 = questionArray; _i < questionArray_2.length; _i++) {
            var question = questionArray_2[_i];
            var currentCategory = question.category;
            if (foundCategories.indexOf(currentCategory) < 0) {
                foundCategories.push(currentCategory);
            }
        }
        return foundCategories.sort();
    };
    QuestionnaireService.prototype.createCategoryObjects = function (questionArray, category, sameCategoryArray) {
        for (var _i = 0, questionArray_3 = questionArray; _i < questionArray_3.length; _i++) {
            var question = questionArray_3[_i];
            if (question.category === category) {
                var categoryObject = this.createSingleCategoryObject(question);
                sameCategoryArray.push(categoryObject);
            }
        }
        return sameCategoryArray;
    };
    QuestionnaireService.prototype.createSingleCategoryObject = function (question) {
        var categoryObject = {
            score: question.score,
            weight: question.weight
        };
        return categoryObject;
    };
    QuestionnaireService.prototype.calculateWeightedAverage = function (sameCategoryArray) {
        var weightTimesScoreSum = 0;
        var weightSum = 0;
        for (var _i = 0, sameCategoryArray_1 = sameCategoryArray; _i < sameCategoryArray_1.length; _i++) {
            var sameCategory = sameCategoryArray_1[_i];
            weightTimesScoreSum += sameCategory.score * sameCategory.weight;
            weightSum += sameCategory.weight;
        }
        var averageScore = weightTimesScoreSum / weightSum;
        return averageScore;
    };
    QuestionnaireService.prototype.getOverallAverage = function (categoryAverages) {
        var sumOfResults = 0;
        for (var _i = 0, categoryAverages_1 = categoryAverages; _i < categoryAverages_1.length; _i++) {
            var category = categoryAverages_1[_i];
            sumOfResults += category.categoryAverage;
        }
        var overallAverage = sumOfResults / categoryAverages.length;
        return overallAverage;
    };
    QuestionnaireService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], QuestionnaireService);
    return QuestionnaireService;
}());
exports.QuestionnaireService = QuestionnaireService;
var Randomise = /** @class */ (function () {
    function Randomise() {
    }
    Randomise.prototype.randomiseOrder = function (questionArray) {
        var unsortedIntegerArray = this.createUnorderedArray(questionArray);
        var unsortedQuestionArray = this.assignQuestionRandomNumbers(questionArray, unsortedIntegerArray);
        var sortedQuestionArray = unsortedQuestionArray.sort(function (question1, question2) {
            return question1.number - question2.number;
        });
        return sortedQuestionArray;
    };
    Randomise.prototype.createUnorderedArray = function (questionArray) {
        var unsortedIntegerArray = [];
        for (var index in questionArray) {
            if (questionArray.hasOwnProperty(index)) {
                unsortedIntegerArray.push(parseInt(index, 10));
            }
        }
        unsortedIntegerArray.sort(function () { return Math.random() - 0.5; });
        return unsortedIntegerArray;
    };
    Randomise.prototype.assignQuestionRandomNumbers = function (questionArray, unsortedIntegerArray) {
        for (var index in unsortedIntegerArray) {
            if (unsortedIntegerArray.hasOwnProperty(index)) {
                questionArray[index].number = unsortedIntegerArray[index];
                questionArray[index].number++;
            }
        }
        return questionArray;
    };
    Randomise = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], Randomise);
    return Randomise;
}());
exports.Randomise = Randomise;
var UploadToFirebase = /** @class */ (function () {
    function UploadToFirebase(afs) {
        this.afs = afs;
        this.questionnaireCollection = this.afs.collection('questionnaires');
        this.questionsCollection = this.afs.collection('questionnaire');
        this.questionnaire = this.questionnaireCollection.snapshotChanges()
            .pipe(operators_1.map(this.includeCollectionID));
        // console.log("HI");
        // this.get(this.questionsCollection)
    }
    UploadToFirebase.prototype.includeCollectionID = function (docChangeAction) {
        return docChangeAction.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        });
    };
    UploadToFirebase.prototype.restructureDocsInCollection = function (collectionSnapshot) {
        var docArray = [];
        collectionSnapshot.forEach(function (doc) {
            docArray.push(__assign({}, doc.data()));
        });
        return docArray;
    };
    UploadToFirebase.prototype.getAllQuestions = function () {
        return this.questionsCollection.get().pipe(operators_1.map(this.restructureDocsInCollection));
    };
    UploadToFirebase.prototype.getAllResults = function () {
        return this.questionnaireCollection.get().pipe(//score
        operators_1.map(this.restructureDocsInCollection));
    };
    UploadToFirebase.prototype.getRecent = function (user, numberOfResults) {
        if (numberOfResults === void 0) { numberOfResults = 1; }
        var resultCollection = this.afs.collection('questionnaires', function (reference) {
            return reference
                .orderBy('date', 'desc')
                .where('user.uid', '==', user.uid)
                .limit(numberOfResults);
        });
        return resultCollection.get().pipe(operators_1.map(this.restructureDocsInCollection));
    };
    UploadToFirebase.prototype.upload = function (questionnaireObject) {
        return this.questionnaireCollection.add(questionnaireObject);
    };
    UploadToFirebase = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UploadToFirebase);
    return UploadToFirebase;
}());
exports.UploadToFirebase = UploadToFirebase;
