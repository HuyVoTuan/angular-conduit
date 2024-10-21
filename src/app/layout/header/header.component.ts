import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrl: './header.component.scss',
  template: `
    <mat-toolbar class="!bg-white">
      <a
        class="toolbar__logo text-lowercase text-h4 font-bold"
        [routerLink]="['/articles']"
        routerLinkActive="router-link-active"
        >Conduit</a
      >
      <span style="flex: 1"></span>
      <ul class="toolbar__menu flex gap-4">
        <li class="toolbar__item">
          <a [routerLink]="['/articles']" routerLinkActive="router-link-active" class="text-h7">
            <ion-icon name="home-outline"></ion-icon>
            Home</a
          >
        </li>
        <li class="toolbar__item">
          <a [routerLink]="['/auth/sign-in']" routerLinkActive="router-link-active" class="text-h7">
            <ion-icon name="log-in-outline"></ion-icon>
            Login</a
          >
        </li>
        <li class="toolbar__item">
          <a [routerLink]="['/auth/sign-up']" routerLinkActive="router-link-active" class="text-h7">Signup</a>
        </li>
      </ul>
    </mat-toolbar>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}
