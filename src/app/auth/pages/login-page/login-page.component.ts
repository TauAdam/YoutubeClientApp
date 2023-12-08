import { Component } from '@angular/core'
import { AbstractControl, FormBuilder, Validators } from '@angular/forms'

import { LoginService } from '../../services/login.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  protected loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, this.customPasswordValidator()]],
  })

  public constructor(
    private loginService: LoginService,
    private fb: FormBuilder
  ) {}

  protected handleSubmit() {
    const { password, username } = this.loginForm.value
    if (username && password) {
      this.loginForm.reset()
      this.loginService.login(username)
    }
  }

  protected get email() {
    return this.loginForm.get('username')
  }

  protected get password() {
    return this.loginForm.get('password')
  }

  private customPasswordValidator() {
    return (control: AbstractControl) => {
      const { value } = control

      const hasMinLength = value.length >= 8

      const hasUpperCase = /[A-Z]/.test(value)
      const hasLowerCase = /[a-z]/.test(value)

      const hasLettersAndNumbers = /[a-zA-Z]+.*\d+|\d+.*[a-zA-Z]+/.test(value)

      const hasSpecialCharacter = /[!@#?]/.test(value)

      const isValid =
        hasMinLength &&
        hasUpperCase &&
        hasLowerCase &&
        hasLettersAndNumbers &&
        hasSpecialCharacter

      if (!isValid) {
        return {
          passwordStrength: {
            message: "Your password isn't strong enough",
            recommendations: [
              'Use at least 8 characters',
              'Include a mixture of uppercase and lowercase letters',
              'Include a mixture of letters and numbers',
              'Include at least one special character (!@#?)',
            ],
          },
        }
      }

      return null
    }
  }
}
