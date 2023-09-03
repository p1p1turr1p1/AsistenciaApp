import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string): Promise<boolean> {
    // Simulate a delay for the animation effect
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        if (username === 'user' && password === 'password') {
          resolve(true); // Successful login
        } else {
          resolve(false); // Failed login
        }
      }, 2000); // Simulate a delay for the animation effect
    });
  }

  logout() {
    // You can add logout logic here if needed
  }
}
