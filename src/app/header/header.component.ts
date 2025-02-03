import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CounterServiceService } from '../service/counter-service.service';
@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 
   counter=0
   constructor(private counterSercive:CounterServiceService){}
   ngOnInit(){
    this.counterSercive.getCounter().subscribe((response)=>this.counter=response)
   }
}
