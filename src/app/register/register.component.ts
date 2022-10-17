import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Register } from '../model/Register';
import { UserdataService } from '../Service/userdata.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    phone_number: new FormControl('', [Validators.required]),
  })
  constructor(private userData: UserdataService) { }

  ngOnInit(): void {

  }
  userRegister(data: any) {
    let register: Register = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
      phone_number: data.phone_number
    }
    this.userData.userRegister(register).subscribe((data) => {
      console.log(register);
      localStorage.setItem('token', data.token)

    })

  }
}
