import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, MatToolbarModule],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeaderModule {}
