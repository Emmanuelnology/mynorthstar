import { Injectable } from '@angular/core';
import { Task } from '../task-manager/task';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


// Snapshot changes and then pipe map and return document ID.

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

    tasks: Observable<Task[]>;

    constructor(private db: AngularFirestore) {}

    addTask(task: Task) {
        return this.db.collection('/tasks').add(task).catch(
            () => {
                throw new Error('Unable to add user');
            }
        );
    }

    getTasks() {
        this.db.collection('/tasks').get();
    }

    deleteTask(task: Task) {
        this.db.collection('/tasks').doc(`${task.id}`).delete().then(function() {
        }).catch(function(error) {
            throw new Error('Did not delete!');
        });
    }

    // toggleCheckBox(task: Task) {
    //     this.task.isChecked = !this.task.isChecked;
    // }

}
