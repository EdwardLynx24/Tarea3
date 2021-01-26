import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  NavegaToHome():void{
    this.router.navigate(['/home'])
  }
}
