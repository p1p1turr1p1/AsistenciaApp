import { Component, ElementRef, ViewChildren, ViewChild, OnInit } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  loggedInUsuario: string = ''; // Variable para almacenar el nombre de usuario
  
  constructor(private animationCtrl: AnimationController) {}

  ngOnInit() {
    // Obtiene el nombre de usuario almacenado en el almacenamiento local.
    this.loggedInUsuario = localStorage.getItem('usuario') || '';
  }

  
}
