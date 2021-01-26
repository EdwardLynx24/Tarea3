import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
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

  login = new FormGroup({
    nickName:this.nickName,
    password:this.password
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logIn():void{
    this.estado="Inicio de sesión exitoso"
  }
  NavegaToHome():void{
    this.router.navigate(['/home']);
  }
}
