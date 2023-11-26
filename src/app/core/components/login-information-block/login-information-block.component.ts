import { Component } from '@angular/core'

import { LoginService } from '../../../auth/services/login.service'

@Component({
  selector: 'app-login-information-block',
  templateUrl: './login-information-block.component.html',
  styleUrls: ['./login-information-block.component.scss'],
})
export class LoginInformationBlockComponent {
  public constructor(protected loginService: LoginService) {}
}
