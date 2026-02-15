import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  constructor(private router: Router) {} 
  loginform:FormGroup=new FormGroup(
    {
      username:new FormControl("",[Validators.required,Validators.minLength(5)]),
      password:new FormControl("",[Validators.required,Validators.minLength(6)]),
    }
  )
  submitLogin(){
    const formValues=this.loginform.value
    console.log(formValues)
    localStorage.setItem("token","token")
    this.router.navigate(['/home']);
  }

}
