import { Component, OnInit } from '@angular/core';

import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

import { UserLogin, UserRegister } from '../../models/user';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: UserLogin;
  register: UserRegister;

  constructor(private authService: AuthService) {
    this.user =  new UserLogin();
    this.register = new UserRegister();
   }

  ngOnInit(): void {
  }

  pikachu: AnimationOptions = {
    path: '/assets/pikachu.json',
  };

  pokebola: AnimationOptions = {
    path: '/assets/pokebola.json',
  };

  pikachuStyle: Partial<CSSStyleDeclaration> = {
    width: '15rem',
    height: '15rem',
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    margin: 'auto'
  };

  pokebolaStyle: Partial<CSSStyleDeclaration> = {
    width: '2rem',
    height: '2rem',
    margin: '0 1rem'
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  loginUser() {
    console.log('--> Logou <--', this.user);
    this.authService.fazerLogin(this.user);
  }

  registerUser() {
    console.log('--> Cadastrou <--');
    // this.authService.fazerCadastro(this.register);
  }
}
