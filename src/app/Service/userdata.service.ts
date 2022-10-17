import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { LoginUser, Register } from '../model/Register';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';
Router
@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  httpOptions = { // this requierd for header api
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  url="http://md-ht-9.hostgator.tempwebhost.net/~spixsbco/pinmart/public/api/v1"

  constructor(private http:HttpClient,
    private router:Router) { }

userRegister(data:Register): Observable<any> {
  return this.http.post<any>(`${this.url}/user/signup`,JSON.stringify(data),this.httpOptions)
    .pipe(map(addRegister => {
      return addRegister;
    })
   )
}
userLogin(user:LoginUser): Observable<any> {
  return this.http.post<any>(`${this.url}/login`,JSON.stringify(user),this.httpOptions)
    .pipe(map(loginuser => {
      return loginuser;
    })
   )
}
loggedIn(){
  return !! localStorage.getItem('token')
}
logoutUser(){
  localStorage.removeItem("token")
  this.router.navigate(['/events'])
}

// side data api 

getCountry():Observable<any>{
  return this.http.get<any>(`${this.url}/country`,this.httpOptions).pipe(map(country=>{
    return country
   })
)}
postCountry(country:string):Observable<any>{
  debugger
  return this.http.post<any>(`${this.url}/country`,country,this.httpOptions).pipe(map(country=>{
    return country
  }))
}
// city api-----------------------?
getCity():Observable<any>{
  return this.http.get<any>(`${this.url}/city`,this.httpOptions).pipe(map(city=>{
    return city
  }))
}


}

