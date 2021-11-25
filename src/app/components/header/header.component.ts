import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  pokebola: AnimationOptions = {
    path: '/assets/pokebola.json',
  };

  pokebolaStyle: Partial<CSSStyleDeclaration> = {
    width: '2rem',
    height: '2rem',
    margin: '0 1rem'
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigate(['/home'])
  }

  goToLogout() {
    this.router.navigate(['']);
  }

}
