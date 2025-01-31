import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
//   handelSubmit(from:any){
//     console.log(from)
// }

 
  handelSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted:', form.value);
      // form.reset()
    } else {
      console.log('Form is invalid, please check the fields.');
    }
  }
  
}
