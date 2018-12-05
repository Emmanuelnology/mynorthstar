import { Injectable } from '@angular/core';
import { Task } from '../task-manager/task';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


// Snapshot changes and then pipe map and return document ID.

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

    tasks: Observable<Task[]>;
    taskCollection: AngularFirestoreCollection<Task>;

    constructor(private db: AngularFirestore) {
        this.taskCollection = this.db.collection<Task>('tasks');
        this.tasks = this.taskCollection.snapshotChanges()
        .pipe(map(this.includeCollectionID));
    }

    includeCollectionID(docChangeAction) {
        return docChangeAction.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data };
        });
       }

    addTask(task: Task) {
        return this.taskCollection.add(task).catch(
            () => {
                throw new Error('Unable to add user');
            }
        );
    }

    getTasks() {
        this.taskCollection.get();
    }

    deleteTask(task: Task) {
        this.taskCollection.doc(`${task.id}`).delete().then(function() {
        }).catch(function(error) {
            throw new Error('Did not delete!');
        });
    }

    // toggleCheckBox(task: Task, bool: boolean) {
    //     this.db.collection('/tasks').doc(`${task.id}`).update({
    //         isChecked: bool,
    //     });
    // }

    checked(task: Task) {
        // let payload = {
        //     isChecked: task.isChecked,
        // }
        // this.taskCollection.doc(task.id).update(payload);

        this.taskCollection.doc(task.id).update({
            isChecked: task.isChecked
        })
        .then(() => {
            console.log('updated tasks ' + task.task);
        })
        .catch((error) => {
            console.log(error);
            throw new Error('Unable to update user');
        });

    }

}
