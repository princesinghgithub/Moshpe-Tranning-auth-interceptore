import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EventComponent } from './event/event.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CityComponent } from './side/city/city.component';
import { CountryComponent } from './side/country/country.component';
import { SpecialEventComponent } from './special-event/special-event.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/events",
    pathMatch:"full"

    
  },
  {
    path:"events",
    component:EventComponent
  },
  {
    path:"special",
    component:SpecialEventComponent,
    canActivate:[AuthGuard]
    
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"country",
    component:CountryComponent
  },
  {
    path:"city",
    component:CityComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
