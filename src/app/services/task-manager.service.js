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
// Snapshot changes and then pipe map and return document ID.
var TaskManagerService = /** @class */ (function () {
    function TaskManagerService(db) {
        this.db = db;
        this.taskCollection = this.db.collection('tasks');
        this.tasks = this.taskCollection.snapshotChanges()
            .pipe(operators_1.map(this.includeCollectionID));
    }
    TaskManagerService.prototype.includeCollectionID = function (docChangeAction) {
        return docChangeAction.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        });
    };
    TaskManagerService.prototype.addTask = function (task) {
        return this.taskCollection.add(task)["catch"](function () {
            throw new Error('Unable to add user');
        });
    };
    TaskManagerService.prototype.getTasks = function () {
        this.taskCollection.get();
    };
    TaskManagerService.prototype.deleteTask = function (task) {
        this.taskCollection.doc("" + task.id)["delete"]().then(function () {
        })["catch"](function (error) {
            throw new Error('Did not delete!');
        });
    };
    // toggleCheckBox(task: Task, bool: boolean) {
    //     this.db.collection('/tasks').doc(`${task.id}`).update({
    //         isChecked: bool,
    //     });
    // }
    TaskManagerService.prototype.checked = function (task) {
        // let payload = {
        //     isChecked: task.isChecked,
        // }
        // this.taskCollection.doc(task.id).update(payload);
        this.taskCollection.doc(task.id).update({
            isChecked: task.isChecked
        })
            .then(function () {
            console.log('updated tasks ' + task.task);
        })["catch"](function (error) {
            console.log(error);
            throw new Error('Unable to update user');
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
