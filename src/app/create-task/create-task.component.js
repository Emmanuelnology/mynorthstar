"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var CreateTaskComponent = /** @class */ (function () {
    function CreateTaskComponent(taskManagerService) {
        this.taskManagerService = taskManagerService;
        this.taskTitle = '';
    }
    CreateTaskComponent.prototype.ngOnInit = function () {
    };
    CreateTaskComponent.prototype.onSubmit = function (title) {
        var task = {
            userId: this.taskManagerService.userId(),
            task: title.value.charAt(0).toUpperCase() + title.value.slice(1).toLowerCase(),
            isChecked: false,
            timestamp: new Date()
        };
        this.taskManagerService.addTask(task).then(function () {
            title.value = '';
        });
    };
    CreateTaskComponent = __decorate([
        core_1.Component({
            selector: 'app-create-task',
            templateUrl: './create-task.component.html',
            styleUrls: ['./create-task.component.scss']
        })
    ], CreateTaskComponent);
    return CreateTaskComponent;
}());
exports.CreateTaskComponent = CreateTaskComponent;
