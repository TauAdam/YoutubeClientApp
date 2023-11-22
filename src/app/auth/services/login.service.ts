import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private localStorageKey = 'trade-secret'

  private defaultUsername = 'Your Name'

  public currentUsername = this.defaultUsername

  public constructor(private router: Router) {}

  public login(username: string) {
    this.currentUsername = username
    this.saveToken('fake auth token')
    this.router.navigate(['/youtube'])
  }

  public isAuthorized() {
    return !!this.getToken()
  }

  public logout() {
    this.deleteToken()
    this.currentUsername = this.defaultUsername
    this.router.navigate(['/login'])
  }

  private getToken() {
    return localStorage.getItem(this.localStorageKey)
  }

  private saveToken(token: string) {
    localStorage.setItem(this.localStorageKey, token)
  }

  private deleteToken() {
    localStorage.removeItem(this.localStorageKey)
  }
}
