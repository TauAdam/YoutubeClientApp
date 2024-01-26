import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private localStorageKey = 'trade-secret'

  private defaultUsername = 'Your Name'

  public currentUsername = this.defaultUsername

  public userIsLoggedIn$ = new BehaviorSubject(this.getInitialStatus())

  public constructor(private router: Router) {}

  public login(username: string) {
    this.currentUsername = username
    this.saveToken('fake auth token')
    this.userIsLoggedIn$.next(true)
    this.router.navigate(['/youtube'])
  }

  public logout() {
    this.deleteToken()
    this.currentUsername = this.defaultUsername
    this.userIsLoggedIn$.next(false)
    this.router.navigate(['/login'])
  }

  private getInitialStatus() {
    return Boolean(localStorage.getItem(this.localStorageKey))
  }

  private saveToken(token: string) {
    localStorage.setItem(this.localStorageKey, token)
  }

  private deleteToken() {
    localStorage.removeItem(this.localStorageKey)
  }
}
