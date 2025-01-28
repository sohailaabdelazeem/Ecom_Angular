import { Component } from '@angular/core';
import {CreateTaskComponent} from '../create-task/create-task.component'
import {TaskListComponent} from '../task-list/task-list.component'

@Component({
  selector: 'app-main-task',
  imports: [CreateTaskComponent,TaskListComponent],
  templateUrl: './main-task.component.html',
  styleUrl: './main-task.component.css'
})
export class MainTaskComponent {
  tasks: { text: string, completed: boolean }[] = [];
  

  addNewTask(taskText: string) {
    this.tasks.push({ text: taskText, completed: false });
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  completeTask(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }
}
