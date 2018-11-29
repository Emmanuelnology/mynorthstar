import { Component, OnInit } from '@angular/core';
import { Task } from '../task-manager/task';
import { AngularFirestore } from '@angular/fire/firestore';
import { TaskManagerService } from '../services/task-manager.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor(private db: AngularFirestore, private taskManagerService: TaskManagerService) { }

  tasks: Observable<any[]>;

  ngOnInit() {
    // this.tasks = this.db.collection('/tasks').valueChanges();
    this.tasks = this.db.collection('/tasks').snapshotChanges()
      .pipe(map((actions) => {
      console.log(actions);

          return actions.map((a) => {
            const data = a.payload.doc.data() as Task;

            // Get document ID
            const id = a.payload.doc.id;
            return { id, ...data };
          });
      }),
    );
  }

  onDelete(task: Task) {
    this.taskManagerService.deleteTask(task);
  }

}
