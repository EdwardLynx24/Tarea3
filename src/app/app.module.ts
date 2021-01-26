import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Hoteleria/home/home.component';
import { Page404Component } from './Hoteleria/page404/page404.component';
import { RegistroComponent } from './Hoteleria/registro/registro.component';
import { LoginComponent } from './Hoteleria/login/login.component';
import { ConocenosComponent } from './Hoteleria/conocenos/conocenos.component';
import { SplashComponent } from './Hoteleria/splash/splash.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component,
    RegistroComponent,
    LoginComponent,
    ConocenosComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
