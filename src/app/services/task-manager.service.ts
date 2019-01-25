import { Injectable } from '@angular/core';
import { ITask, ITaskDownload, ITaskUpload } from '../task-manager/task';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Reference } from '@angular/compiler/src/render3/r3_ast';

// Snapshot changes and then pipe map and return document ID.

@Injectable({
    providedIn: 'root'
})
export class TaskManagerService {

    // tasks: Observable<ITaskDownload[]>;
    // taskCollection: AngularFirestoreCollection<ITask>;
    // overdueCollection: AngularFirestoreCollection<ITaskDownload>;

    constructor(private db: AngularFirestore, private auth: AuthService) {
        // this.taskCollection = this.db.collection<ITask>('tasks', (reference) => {
        //     return reference
        //     .where('userId', '==', this.auth.user.uid).orderBy('timestamp', 'desc');

        // });
        // this.overdueCollection = this.db.collection<ITaskDownload>('tasks', (ref) => {
        //     return ref
        //     .where('userId', '==', this.auth.user.uid);
        // });
        // this.tasks = this.taskCollection.snapshotChanges()
        // .pipe(map(this.includeCollectionID));
    }

    includeCollectionID(docChangeAction) {
    return docChangeAction.map((a) => {
        const data = a.payload.doc.data() as ITaskDownload;
        const id = a.payload.doc.id;
        const currentTimestamp = new Date().getTime();
        const previousTimestamp = data.timestamp.toDate().getTime();
        if (currentTimestamp - previousTimestamp >= 2419200000) {
            data.isOverdue = true;
        }
        return { id, ...data };
        });
    }

    get taskCollection(): AngularFirestoreCollection<ITask> {
        return this.db.collection<ITask>('tasks', (reference) => {
            return reference
            .where('userId', '==', this.auth.user.uid).orderBy('timestamp', 'desc');

        });
    }

    get overdueCollection(): AngularFirestoreCollection<ITaskDownload> {
        return this.db.collection<ITaskDownload>('tasks', (ref) => {
            return ref
            .where('userId', '==', this.auth.user.uid);
        });
    }

    get tasks(): Observable<ITaskDownload[]> {
        return  this.taskCollection.snapshotChanges()
        .pipe(map(this.includeCollectionID));
    }

    addTask(task: ITaskUpload) {
        return this.taskCollection.add(task).catch(
            () => {
                throw new Error('Unable to add user');
            }
            );
        }

        getTask(taskId: string) {
            let task: AngularFirestoreDocument<ITaskDownload>;
            task = this.taskCollection.doc<ITaskDownload>(taskId);
            return task.get().pipe(
                map((snapshot) => {
                    return { id: taskId, ...snapshot.data() };
                })
                );
            }

            deleteTask(task: ITaskDownload) {
                this.taskCollection.doc(`${task.id}`).delete()
                .then(function() {
                }).catch(function(error) {
                    throw new Error('Did not delete!');
                });
            }

            checked(task: ITaskDownload) {
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


        }



