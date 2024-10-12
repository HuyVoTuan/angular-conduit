import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { LayoutComponent } from './layout.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, BannerComponent],
  imports: [CommonModule, RouterModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatButtonModule],
  schemas: [
    // CUSTOM_ELEMENTS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class LayoutModule {}
