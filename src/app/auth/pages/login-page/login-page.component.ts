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
      const value = control?.value as string

      const hasMinLength = value?.length >= 8
      const hasMixtureOfCases = /[A-Z]/.test(value) && /[a-z]/.test(value)
      const hasLettersAndNumbers = /[a-zA-Z]+.*\d+|\d+.*[a-zA-Z]+/.test(value)
      const hasSpecialCharacter = /[!@#?]/.test(value)

      const isValid =
        hasMinLength &&
        hasMixtureOfCases &&
        hasLettersAndNumbers &&
        hasSpecialCharacter

      const recommendations = []

      if (!hasMinLength) recommendations.push('Use at least 8 characters')
      if (!hasMixtureOfCases)
        recommendations.push(
          'Include a mixture of uppercase and lowercase letters'
        )
      if (!hasLettersAndNumbers)
        recommendations.push('Include a mixture of letters and numbers')
      if (!hasSpecialCharacter)
        recommendations.push('Include at least one special character (! @ # ?)')

      return isValid
        ? null
        : {
            passwordStrength: {
              message: "Your password isn't strong enough",
              recommendations,
            },
          }
    }
  }
}
