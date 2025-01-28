import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // constructor(private router:Router){
  //     console.log("constructor");
      
  // }
// handleDtails(id:number){
//   this.router.navigate(['/product-details'])
// }

}
