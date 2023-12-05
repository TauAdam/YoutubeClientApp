import { inject, Injectable } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'

import { LoginService } from '../../auth/services/login.service'

@Injectable()
export class PermissionsService {
  private isAuthorized = false

  public constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  public canActivate() {
    this.loginService.userIsLoggedIn$.subscribe(status => {
      this.isAuthorized = status
    })
    if (this.isAuthorized) {
      return true
    }
    this.router.navigate(['/login'])
    return false
  }
}
export const authGuard: CanActivateFn = () =>
  inject(PermissionsService).canActivate()
