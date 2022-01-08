import { Router } from '@angular/router';
import { AuthService } from './../../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(public fb: FormBuilder, public authService: AuthService) { 
    this.buildForm();
  }

  ngOnInit(): void { /*Empty*/ }

  public buildForm() {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })

  }

  public loginUser() {
    this.authService.login(this.loginForm.value);
   
  }
}
