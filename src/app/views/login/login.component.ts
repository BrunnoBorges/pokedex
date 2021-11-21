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

  rocket: AnimationOptions = {
    path: '/assets/dragon2.json',
  };

  rockets: Partial<CSSStyleDeclaration> = {
    width: '15rem',
    height: '15rem',
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    margin: 'auto'
  };

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
