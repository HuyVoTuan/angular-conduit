import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedsComponent } from './feeds.component';

@NgModule({
  declarations: [FeedsComponent],
  exports: [FeedsComponent],
  imports: [CommonModule],
})
export class FeedsModule {}
