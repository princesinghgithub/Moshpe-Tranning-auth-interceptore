import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventComponent } from './event/event.component';
import { SpecialEventComponent } from './special-event/special-event.component';
import { UserdataService } from './Service/userdata.service';
import { AuthGuard } from './auth.guard';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CityComponent } from './side/city/city.component';
import { CountryComponent } from './side/country/country.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventComponent,
    SpecialEventComponent,
    SidebarComponent,
    CityComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserdataService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
