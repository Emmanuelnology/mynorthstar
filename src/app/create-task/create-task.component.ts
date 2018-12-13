import { Component, OnInit, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { TaskManagerService } from '../services/task-manager.service';
import { ITaskUpload } from '../task-manager/task';
import { FormsModule } from '@angular/forms';
import { SlicePipe } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit, OnDestroy {
  taskTitle = '';
  addButtonDisabled = false;
  taskCount  = 0;
  taskCountSubscription: Subscription;

  constructor(private taskManagerService: TaskManagerService, private afAuth: AuthService) {}

  ngOnInit() {
    this.taskCountSubscription = this.taskManagerService.taskCollection.valueChanges().subscribe((data) => {
        this.taskCount = data.length;
    });
  }

  ngOnDestroy() {
    this.taskCountSubscription.unsubscribe();
  }

  test(val) {
    console.log('Rawr');
  }

  addTask(title: HTMLFormElement) {
    if (title.value && this.taskCount < 5) {
      const task: ITaskUpload = {
        userId: this.afAuth.user.uid,
        task: title.value.charAt(0).toUpperCase() + title.value.slice(1).toLowerCase(),
        isChecked: false,
        timestamp: new Date(),
        isOverdue: false
      };

      this.addButtonDisabled = true;

      this.taskManagerService.addTask(task).then(
      () => {
        title.value = '';
        this.addButtonDisabled = false;
      });
    }
  }

  onSubmit(title: HTMLFormElement) {
      this.addTask(title);
  }
}
