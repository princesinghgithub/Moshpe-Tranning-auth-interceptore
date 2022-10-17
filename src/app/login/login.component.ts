import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from '../model/Register';
import { UserdataService } from '../Service/userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserLoginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })
  toaster: any;
  constructor(private userData: UserdataService,
    private router:Router) { }

  userLogin(_data: any) {
    let loginemploye: LoginUser = {
      email: _data.email,
      password: _data.password
    }
    console.log(loginemploye);
    this.userData.userLogin(_data).subscribe((res) => {
      if (res) {
        alert("Login successfull !..")
        console.log(res.token);
        localStorage.setItem('token', res.token)
        this.router.navigate(['/special'])

      } else {
        alert("username and password is incorrect")
        this.toaster.error("username and password is incorrect")
      }
    })

  }
  ngOnInit(): void {
  }

}