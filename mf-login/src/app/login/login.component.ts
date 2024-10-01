import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as authActions from '../state/auth/auth.actions';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  protected loginForm!: FormGroup;

  constructor (private formBuilder: FormBuilder, private store: Store) {
    this.loginForm = formBuilder.group({email:['',Validators.email], password:['',Validators.required]});
  }

  protected onLogin():void{
    const credentials = {
      email: this.loginForm.get("email")?.value,
      password: this.loginForm.get("password")?.value,
    };

    this.store.dispatch(authActions.loginRequest( {credentials} ))
  }
}
