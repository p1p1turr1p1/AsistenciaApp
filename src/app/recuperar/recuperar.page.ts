import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }


  irLogin() {
    this.router.navigate(['/login']);
} 
  ngOnInit() {
  }

}
