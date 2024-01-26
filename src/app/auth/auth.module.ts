import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { CustomButtonComponent } from '../shared/custom-button/custom-button.component'
import { AuthRoutingModule } from './auth-routing.module'
import { LoginPageComponent } from './pages/login-page/login-page.component'

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    CustomButtonComponent,
  ],
})
export class AuthModule {}
