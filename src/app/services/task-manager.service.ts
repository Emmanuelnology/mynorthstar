import { Injectable } from '@angular/core';
import { Task } from '../task-manager/task';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';


// Snapshot changes and then pipe map and return document ID.

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

    tasks: Observable<Task[]>;
    taskCollection: AngularFirestoreCollection<Task>;

    constructor(private db: AngularFirestore, private auth: AuthService) {
        this.taskCollection = this.db.collection<Task>('tasks', (ref) => {
           return ref.where('userId', '==', this.auth.user.uid);
        });
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

    getTask(taskId: string) {
        let task: AngularFirestoreDocument<Task>;
        task = this.taskCollection.doc<Task>(taskId);
        return task.get().pipe(
            map((snapshot) => {
                return { id: taskId, ...snapshot.data() };
        })
      );
    }

    deleteTask(task: Task) {
        this.taskCollection.doc(`${task.id}`).delete().then(function() {
        }).catch(function(error) {
            throw new Error('Did not delete!');
        });
    }

    checked(task: Task) {
        const payload = {
            isChecked: task.isChecked,
        };
        this.taskCollection.doc(task.id).update(payload)
        .then(() => {
            console.log('updated tasks ' + task.task);
        })
        .catch((error) => {
            console.log(error);
            throw new Error('Unable to update user');
        });
    }

    // lengthOfTaskList() {
    //     this.tasks.subscribe(result => {
    //         console.log(result.length);
    //         return result.length;
    //     });
    // }

}
