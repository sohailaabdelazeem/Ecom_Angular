import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 
constructor(private router: Router) {}

  handelSubmit(form: any) {
    if (form.valid) {
       console.log("Login successful!");

       this.router.navigate(['/app-all-product']);
    } else {
      console.log("Form is invalid, please correct errors.");
    }
  }
 
 
  
}
