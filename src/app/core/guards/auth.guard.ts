import { inject, Injectable } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'

import { LoginService } from '../../auth/services/login.service'

@Injectable()
export class PermissionsService {
  public constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  public canActivate() {
    if (this.loginService.isAuthorized()) {
      return true
    }
    return this.router.navigate(['/login'])
  }
}
export const authGuard: CanActivateFn = () =>
  inject(PermissionsService).canActivate()
