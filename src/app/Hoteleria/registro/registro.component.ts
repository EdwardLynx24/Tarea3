import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nombres = new FormControl('');
  apellidos = new FormControl('');
  edad = new FormControl('');
  correo = new FormControl('');
  nickname = new FormControl('');
  password = new FormControl('');
  nCreditCard = new FormControl('');
  passCredit = new FormControl('');
  fecha = new FormControl('');
  texto: String;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  NavegaToHome():void{
    this.router.navigate([''])
  }
  Guardar():void{
    this.texto = "Datos Guardados"
  }
}
