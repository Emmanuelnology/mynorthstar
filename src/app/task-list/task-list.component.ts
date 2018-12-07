import { Component, OnInit } from '@angular/core';
import { Task } from '../task-manager/task';
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

  tasks: Observable<Task[]>;

  ngOnInit() {}

  onDelete(task: Task) {
    this.taskManagerService.deleteTask(task);
  }

  checked(task: Task) {
    this.taskManagerService.checked(task);
  }

}
