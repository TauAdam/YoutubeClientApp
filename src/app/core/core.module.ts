import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'
import { MatSortModule } from '@angular/material/sort'

import { CustomButtonComponent } from '../custom-button/custom-button.component'
import { FilteringCriteriaBlockComponent } from './components/filtering-criteria-block/filtering-criteria-block.component'
import { HeaderComponent } from './components/header/header.component'
import { LoginInformationBlockComponent } from './components/login-information-block/login-information-block.component'
import { LogoComponent } from './components/logo/logo.component'
import { PermissionsService } from './guards/auth.guard'
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component'

@NgModule({
  declarations: [
    FilteringCriteriaBlockComponent,
    HeaderComponent,
    LoginInformationBlockComponent,
    LogoComponent,
    NotFoundPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatSortModule,
    CustomButtonComponent,
  ],
  exports: [HeaderComponent],
  providers: [PermissionsService],
})
export class CoreModule {}
