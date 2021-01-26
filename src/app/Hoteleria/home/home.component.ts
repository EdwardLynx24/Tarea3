import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  NavegaToRegistro(){
    this.router.navigate(['/registro'])
  }
  NavegaToLogin():void{
    this.router.navigate(['/login']);
  }
  NavegaToMeet():void{
    this.router.navigate(['/conocenos'])
  }
    NavegaToHome():void{
    this.router.navigate([''])
  }
}
