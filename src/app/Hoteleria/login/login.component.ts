import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nickName = new FormControl('');
  password = new FormControl('');
  estado: String;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logIn():void{
    this.estado="Inicio de sesión exitoso"
  }
  NavegaToHome():void{
    this.router.navigate(['']);
  }
}
