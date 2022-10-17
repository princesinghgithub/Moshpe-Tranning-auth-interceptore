import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserdataService } from './Service/userdata.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
constructor( private userData:UserdataService,private router:Router,
){ }
  canActivate():boolean{
    if(this.userData.loggedIn()){
      return true
    }else{
      this.router.navigate(['/login'])
      return false
    }
  }

  
}
