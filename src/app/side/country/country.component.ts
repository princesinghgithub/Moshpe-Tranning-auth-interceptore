import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/Service/userdata.service';
import { FormControl,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countries:any
  constructor(private userData:UserdataService) { }

  ngOnInit(): void {
    this.getcountry();
  }
  countryForm=new FormGroup({
    country:new FormControl('',[Validators.required])
  })
  SubmitCountryform(country:any){
    this.userData.postCountry(country).subscribe((result)=>{
      this.countries=result.data
      console.log(country);
      
        })
    
  }
getcountry(){
  this.userData.getCountry().subscribe((data)=>{
this.countries=data.data
  })
}
// postcountry(country:any){
//   this.userData.postCountry(country).subscribe((res)=>{
// this.countries=res
//   })
// }
postcountry(country:any){
  this.userData.postCountry(country).subscribe((result)=>{
 this.countries=result.data
  })
}

}
