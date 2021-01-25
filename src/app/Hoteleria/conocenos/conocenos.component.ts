import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conocenos',
  templateUrl: './conocenos.component.html',
  styleUrls: ['./conocenos.component.css']
})
export class ConocenosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  NavegaToHome():void{
    this.router.navigate([''])
  }
}
