import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { TaskComponent } from './task/task.component';
import { HeaderComponent } from './header/header.component';
import { EcomComponent } from './ecom/ecom.component';
import {TaskComponent} from './task/task.component'
import { MainTaskComponent } from './main-task/main-task.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,HeaderComponent,EcomComponent,TaskComponent,MainTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'third-Day';
}
