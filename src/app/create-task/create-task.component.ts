import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { TaskManagerService } from '../services/task-manager.service';
import { Task } from '../task-manager/task';
import { FormsModule } from '@angular/forms';
import { SlicePipe } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  taskTitle = '';
  addButtonDisabled = false;

  constructor(private taskManagerService: TaskManagerService, private afAuth: AuthService) { }

  ngOnInit() {
  }

  onSubmit(title: HTMLFormElement) {
    if (title.value) {
      const task: Task = {
        userId: this.afAuth.user.uid,
        task: title.value.charAt(0).toUpperCase() + title.value.slice(1).toLowerCase(),
        isChecked: false,
        timestamp: new Date()
      };

      this.addButtonDisabled = true;

      this.taskManagerService.addTask(task).then(
        () => {
          title.value = '';
          this.addButtonDisabled = false;
      });
  }

}
}
