import { AuthService } from './../../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/core/models/iuser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;
// código clase Formularios
  public submitted: boolean = false;


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
    if (this.registerForm.valid) {

    this.authService.register(this.registerForm?.value).subscribe((res: any) => {
      if(res.result) {
        this.registerForm?.reset();
        this.submitted = false;
        this.router.navigate(['login'])
      } 
    })
    } else {alert("registro incorrecto")}
  }
  // código clase Formularios
  // public onSubmit(): void {
  //   this.submitted = true;
    // if (this.registerForm.valid) {
    //   const user: Iuser = {
    //     name: this.registerForm.get('name')?.value,
    //     email: this.registerForm.get('email')?.value,
    //     password: this.registerForm.get('password')?.value
    // };
    // console.log('Usuario:', user);
    // this.registerUser();
    // } else {alert('maaaaaal');
    // this.registerForm.reset();
    // this.submitted = false;
    // };
  // }
}
