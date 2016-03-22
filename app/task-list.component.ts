import { Component, EventEmitter } from 'angular2/core';
import { TaskComponent } from './task.component';
import { Task } from './task.model';
import { EditTaskComponent } from './edit-task.component';

@Component({
  selector: 'task-list',
  inputs: ['taskList'],
  outputs: ['onTaskSelect'],
  directives: [TaskComponent, EditTaskComponent],
  templateUrl: 'app/task-list.component.html'
})

export class TaskListComponent {
  public taskList: Task[];
  taskClicked(clickedTask: Task): void {
    console.log("Hector here:" + clickedTask);
    this.selectedTask = clickedTask;
    this.onTaskSelect.emit(clickedTask);
  }
  public onTaskSelect: EventEmitter<Task>;
  public selectedTask: Task;
  constructor() {
    this.onTaskSelect = new EventEmitter();
  }
}
