import { Component } from '@angular/core';
import { UserdataService } from './Service/userdata.service';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tranning';
  users:any
// constructor(private userdata:UserdataService){
// this.userdata.users().subscribe((data)=>{
// this.users=data
// })
// }
// getuserdata(data:any){
// console.log(data);
// }

// loginform=new FormGroup({
//   email:new FormControl(''),
//   password:new FormControl('',)
// })
// loginUser(){
//   console.log(this.loginform.value);
  
// }

constructor(public userData:UserdataService){}
}



