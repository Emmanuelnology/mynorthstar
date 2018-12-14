import { Component, OnInit } from '@angular/core';
import { ITaskDownload, ITask, ITaskUpload } from '../task-manager/task';
import { AngularFirestore } from '@angular/fire/firestore';
import { TaskManagerService } from '../services/task-manager.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor(private db: AngularFirestore, private taskManagerService: TaskManagerService) {
    this.tasks = this.taskManagerService.tasks;

  }

  tasks: Observable<ITask[]>;

  ngOnInit() {

  }


  onDelete(task: ITaskDownload) {
    this.taskManagerService.deleteTask(task);

  }

  checked(task: ITaskDownload) {
    this.taskManagerService.checked(task);

  }

}
