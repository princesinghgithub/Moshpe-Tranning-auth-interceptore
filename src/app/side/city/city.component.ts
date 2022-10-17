import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/Service/userdata.service';
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  cities: any
  constructor(private userData: UserdataService) { }

  ngOnInit(): void {
    // this.getCity();
    this.getcity();
  }
  // getCity() {
  //   debugger
  //   this.userData.getCity().subscribe((data) => {
  //     this.cities =data
  //     console.log(data);
      
  //   })
  // }
getcity(){
  this.userData.getCity().subscribe((result)=>{
    this.cities=result.data
  })
}
}
