import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

 export function passwordMatch(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;   
    const confirmPassword = control.get('conPassword')?.value;  

     if (password && confirmPassword && password !== confirmPassword) {
      return { passwordMismatch: true };   
    }
    
    return null; 
  };
}

 