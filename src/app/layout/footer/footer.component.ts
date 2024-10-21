import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  styleUrl: './footer.component.scss',
  template: `
    <div class="footer bg-theme-gray text-white">
      <div class="footer__content">
        <a
          [routerLink]="['/articles']"
          routerLinkActive="router-link-active"
          class="font-bold mr-0 md:mr-4 text-lowercase"
          >Conduit</a
        >
        <span>
          An interactive learning project from
          <a [routerLink]="['/articles']" routerLinkActive="router-link-active">Thinkster</a>. Code & design licensed
          under MIT.
        </span>
      </div>
    </div>
  `,
})
export class FooterComponent {}
