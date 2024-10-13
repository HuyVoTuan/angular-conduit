import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignOutComponent } from './sign-out/sign-out.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from '../../core/guards/auth.guard';

@NgModule({
  declarations: [SignInComponent, SignOutComponent, SignUpComponent],
  imports: [CommonModule, ReactiveFormsModule, AuthRoutingModule],
  providers: [AuthGuard],
})
export class AuthModule {}
