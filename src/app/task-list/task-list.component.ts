import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-task-list',
  imports: [CommonModule,FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  @Input() tasks: { text: string, completed: boolean }[] = [];
  @Output() taskDeleted: EventEmitter<number> = new EventEmitter();
  @Output() taskCompleted: EventEmitter<number> = new EventEmitter();


  deleteTask(index: number) {
    this.taskDeleted.emit(index);
  }
  completeTask(index: number) {
    this.taskCompleted.emit(index);
  }
}
