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
var TaskListComponent = /** @class */ (function () {
    function TaskListComponent(db, taskManagerService) {
        this.db = db;
        this.taskManagerService = taskManagerService;
    }
    TaskListComponent.prototype.ngOnInit = function () {
        // this.tasks = this.db.collection('/tasks').valueChanges();
        this.tasks = this.db.collection('/tasks').snapshotChanges()
            .pipe(operators_1.map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                // Get document ID
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    TaskListComponent.prototype.onDelete = function (task) {
        this.taskManagerService.deleteTask(task);
    };
    TaskListComponent.prototype.isTrue = function (task, bool) {
        this.taskManagerService.toggleCheckBox(task, bool);
    };
    TaskListComponent = __decorate([
        core_1.Component({
            selector: 'app-task-list',
            templateUrl: './task-list.component.html',
            styleUrls: ['./task-list.component.scss']
        })
    ], TaskListComponent);
    return TaskListComponent;
}());
exports.TaskListComponent = TaskListComponent;
