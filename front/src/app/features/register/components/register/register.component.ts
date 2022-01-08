import { AuthService } from './../../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;

  constructor(public authService: AuthService, public fb: FormBuilder, public router: Router) {
    this.buildForm();
   }

  ngOnInit(): void {/* Empty */}

  public buildForm() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(8)]]
    })
  }

  public registerUser() {
    this.authService.register(this.registerForm?.value).subscribe((res: any) => {
      if(res.result) {
        this.registerForm?.reset();
        this.router.navigate(['login'])
      }
    })
  }
  

}
