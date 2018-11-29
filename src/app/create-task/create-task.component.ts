import { Component, OnInit } from '@angular/core';
import { TaskManagerService } from '../services/task-manager.service';
import { Task } from '../task-manager/task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  constructor(private taskManagerService: TaskManagerService) { }

  ngOnInit() {
  }

  onSubmit(title: string) {
    const task: Task = {
      userId: 'MOCKUSER',
      task: title,
      isChecked: false
    };
    this.taskManagerService.addTask(task);
  }
}
