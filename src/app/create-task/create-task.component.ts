import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-create-task',
  imports: [FormsModule,CommonModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  newTask: string = '';

  @Output() taskAdded: EventEmitter<string> = new EventEmitter();
  addTask() {
    if (this.newTask.trim() !== '') {
      this.taskAdded.emit(this.newTask.trim());
      this.newTask = ''; 
    }
  }

}
