"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
// Snapshot changes and then pipe map and return document ID.
var TaskManagerService = /** @class */ (function () {
    function TaskManagerService(db) {
        this.db = db;
    }
    TaskManagerService.prototype.addTask = function (task) {
        return this.db.collection('/tasks').add(task)["catch"](function () {
            throw new Error('Unable to add user');
        });
    };
    TaskManagerService.prototype.getTasks = function () {
        this.db.collection('/tasks').get();
    };
    TaskManagerService.prototype.deleteTask = function (task) {
        this.db.collection('/tasks').doc("" + task.id)["delete"]().then(function () {
        })["catch"](function (error) {
            throw new Error('Did not delete!');
        });
    };
    TaskManagerService.prototype.toggleCheckBox = function (task, bool) {
        this.db.collection('/tasks').doc("" + task.id).update({
            isChecked: bool
        });
    };
    TaskManagerService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TaskManagerService);
    return TaskManagerService;
}());
exports.TaskManagerService = TaskManagerService;
