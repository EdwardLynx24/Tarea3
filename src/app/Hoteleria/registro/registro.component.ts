import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  texto:String
    nombres = new FormControl('',Validators.required);
    apellidos = new FormControl('',Validators.required);
    edad = new FormControl('',Validators.required);
    correo = new FormControl('',Validators.required);
    nickname = new FormControl('',Validators.required);
    password = new FormControl('',Validators.required);
    nCreditCard = new FormControl('',Validators.required);
    passCredit = new FormControl('',Validators.required);
    fecha = new FormControl('',Validators.required);

    registro = new FormGroup({
      nombres:this.nombres,
      apellidos:this.apellidos,
      edad:this.edad,
      correo:this.correo,
      nickname:this.nickname,
      password:this.password,
      nCreditCard:this.nCreditCard,
      passCredit:this.passCredit,
      fecha:this.fecha
});
  
  constructor(private router: Router, private fb: FormBuilder) { }
  ngOnInit(): void {
  }
  NavegaToHome():void{
    this.router.navigate(['/home'])
  }
  Guardar():void{
    this.texto = "Datos Guardados"
  }
  onSubmit() {
  }
}
