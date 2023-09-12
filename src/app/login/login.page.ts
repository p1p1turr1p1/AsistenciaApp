import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }
  
  irHome() {
      localStorage.setItem('usuario', this.usuario);
      this.router.navigate(['/home']);
  } 

  recuperarContra() {
    this.router.navigate(['/recuperar']);

} 


  ngOnInit() {
  }

}
