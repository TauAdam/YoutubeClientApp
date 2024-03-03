import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { LoginService } from '../../../auth/services/login.service'

@Component({
  selector: 'app-login-information-block',
  templateUrl: './login-information-block.component.html',
  styleUrls: ['./login-information-block.component.scss'],
})
export class LoginInformationBlockComponent implements OnInit {
  protected isAuthorized = false

  public constructor(
    protected loginService: LoginService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.loginService.userIsLoggedIn$.subscribe(status => {
      this.isAuthorized = status
    })
  }

  public changeStatus() {
    if (!this.isAuthorized) {
      this.router.navigate(['/youtube'])
    } else {
      this.loginService.logout()
    }
  }
}
