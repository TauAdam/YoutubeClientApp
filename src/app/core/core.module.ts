import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'

import { CustomButtonComponent } from '../custom-button/custom-button.component'
import { FilteringCriteriaBlockComponent } from './components/filtering-criteria-block/filtering-criteria-block.component'
import { HeaderComponent } from './components/header/header.component'
import { LoginInformationBlockComponent } from './components/login-information-block/login-information-block.component'
import { LogoComponent } from './components/logo/logo.component'

@NgModule({
  declarations: [
    FilteringCriteriaBlockComponent,
    HeaderComponent,
    LoginInformationBlockComponent,
    LogoComponent,
  ],
  imports: [CommonModule, FormsModule, MatIconModule, CustomButtonComponent],
  exports: [HeaderComponent],
})
export class CoreModule {}
