import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  displayMenu = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Sign In',
      url: '/auth/sign-in',
    },
    {
      name: 'Sign Up',
      url: '/auth/sign-up',
    },
  ];
}
