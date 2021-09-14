import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  public registerForm: FormGroup;

  public get emailControl(){
    return this.registerForm.get('email')
  }

  public get nameControl(){
    return this.registerForm.get('name')
  }

  //..

  constructor() {
    this.registerForm = new FormGroup({
      email : new FormControl('', [Validators.required, Validators.minLength(5)]),
      name : new FormControl('',Validators.required ),
      password : new FormControl('', Validators.required)
    })
   }

  ngOnInit(): void {
  }

  handleRegister(){
    console.log(this.registerForm)
  }
}
