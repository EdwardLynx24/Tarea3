import { SplashComponent } from './Hoteleria/splash/splash.component';
import { ConocenosComponent } from './Hoteleria/conocenos/conocenos.component';
import { LoginComponent } from './Hoteleria/login/login.component';
import { RegistroComponent } from './Hoteleria/registro/registro.component';
import { Page404Component } from './Hoteleria/page404/page404.component';
import { HomeComponent } from './Hoteleria/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {path: '', component: SplashComponent},
  {path: 'home', component: HomeComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'conocenos', component: ConocenosComponent},
  {path: '**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
