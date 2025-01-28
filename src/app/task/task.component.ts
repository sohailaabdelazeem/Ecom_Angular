import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-task',
  imports: [FormsModule,CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  newTask: string = '';  
  tasks: Array<{ text: string, completed: boolean }> = []; 

 addTask() {
  if (this.newTask.trim() !== '') {
    this.tasks.push({ text: this.newTask.trim(), completed: false }); 
    this.newTask = '';  
  }


}

   deleteTask(index: number) {
    this.tasks.splice(index, 1);  
  }

  completeTask(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;   
  }



}
 
 
 
