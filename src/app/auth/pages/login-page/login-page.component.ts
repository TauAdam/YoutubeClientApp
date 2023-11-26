import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

import { LoginService } from '../../services/login.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  protected loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  public constructor(private loginService: LoginService) {}

  protected handleSubmit() {
    const { password, username } = this.loginForm.value
    if (username && password) {
      this.loginForm.reset()
      this.loginService.login(username)
    }
  }
}
