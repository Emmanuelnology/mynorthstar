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

  resetForm(form) {
    form.reset();
  }

}
