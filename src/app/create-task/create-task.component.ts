import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { TaskManagerService } from '../services/task-manager.service';
import { Task } from '../task-manager/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  taskTitle = '';
  constructor(private taskManagerService: TaskManagerService) { }

  ngOnInit() {
  }

  onSubmit(title: HTMLFormElement) {
    const task: Task = {
      userId: 'MOCKUSER',
      task: title.value,
      isChecked: false
    };
    this.taskManagerService.addTask(task).then(
      () => {
        title.value = '';
    });
  }
}
