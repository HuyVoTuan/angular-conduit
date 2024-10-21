import { ChangeDetectionStrategy, ViewChild, Component, Inject, ChangeDetectorRef } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  styleUrl: './app.component.scss',
  template: `
    <div class="page-layout">
      <header class="page-header">
        <div class="flex flex-row items-center justify-around gap-2 pl-2 pr-2">
          <button mat-icon-button (click)="onToggleSidenav()"><mat-icon>menu</mat-icon></button>
          <div class="flex-auto">
            <app-header />
          </div>
        </div>
      </header>

      <main class="page-content">
        <mat-drawer-container [hasBackdrop]="isShown" class="page-content-container">
          <mat-drawer #snav [mode]="'over'">
            <div class="flex flex-col p-2">
              <div class="flex flex-col items-start justify-start gap-4">
                <ng-container *ngFor="let item of displayMenu">
                  <a [routerLink]="['/routePath']" routerLinkActive="router-link-active">{{ item.name | titlecase }}</a>
                </ng-container>
              </div>
            </div>
          </mat-drawer>
          <mat-drawer-content>
            <router-outlet />
          </mat-drawer-content>
        </mat-drawer-container>
      </main>

      <footer class="page-footer">
        <app-footer />
      </footer>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'conduit';
  isShown: boolean = false;
  readonly displayMenu = [
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

  @ViewChild('snav') snav!: MatDrawer;

  constructor(@Inject(ChangeDetectorRef) private cdr: ChangeDetectorRef) {}

  onToggleSidenav(): void {
    this.snav.toggle();
    this.isShown = this.snav.opened;
    this.cdr.detectChanges();
  }
}
