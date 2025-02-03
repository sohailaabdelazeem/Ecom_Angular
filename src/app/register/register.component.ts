import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import{passwordMatch} from '../confirePassword'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  recipeForm: FormGroup;
// from:any
  constructor(private router: Router) {
    this.recipeForm = new FormGroup({
      fullName:new FormControl('',[Validators.minLength(3),Validators.required]),
       Email: new FormControl('', [
        Validators.required,
         Validators.pattern(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        )
      ]),
       userName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[^\s]+(\s+[^\s]+)*$/)
      ]),      
       password:new FormControl('', [
        Validators.required,
         Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$")

      ]),
      conPassword: new FormControl('', [Validators.required]),
        },
        { validators: passwordMatch() } 
      );
  }
  get formControls() {
    return this.recipeForm.controls;
  }
  
  
  handleSubmitForm() {
    

    
      console.log("Login successful!");

      this.router.navigate(['/app-login']);
   
  }

 


  }
