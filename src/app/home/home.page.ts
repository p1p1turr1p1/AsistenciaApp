import { Component, ElementRef, ViewChildren, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  loggedInUsuario: string = ''; // Variable almacena usuario
  
  constructor(private router: Router) {}

  ngOnInit() {
    // Obtiener usuario
    this.loggedInUsuario = localStorage.getItem('usuario') || '';
  }

  logOut() {
    this.router.navigate(['/login']);
} 

  
  
}
