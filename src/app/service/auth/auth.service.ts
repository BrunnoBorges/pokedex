import { Injectable } from '@angular/core';
import { UserLogin, UserRegister } from '../../models/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userAutenticator: boolean ;

  constructor(private router: Router, private http: HttpClient) { 
    this.userAutenticator = false;
  }


  fazerLogin(user: UserLogin) {
    if(user.email === 'test_user@gmail.com' && user.senha === '12345') {
      this.userAutenticator = true;
      this.router.navigate(['home']);
    } else [
      this.userAutenticator = false
    ]
  }

  fazerCadastro(register: UserRegister) {

  }
}
