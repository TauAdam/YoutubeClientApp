import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'

import { LoginService } from '../../../auth/services/login.service'
import { CustomButtonComponent } from '../../../shared/custom-button/custom-button.component'
import { LoginInformationBlockComponent } from './login-information-block.component'

describe('LoginInformationBlockComponent', () => {
  let component: LoginInformationBlockComponent
  let fixture: ComponentFixture<LoginInformationBlockComponent>
  let loginService: LoginService

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginInformationBlockComponent],
      imports: [CustomButtonComponent],
      providers: [LoginService],
    })

    fixture = TestBed.createComponent(LoginInformationBlockComponent)
    component = fixture.componentInstance
    loginService = TestBed.inject(LoginService)
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should subscribe to userIsLoggedIn$ observable in ngOnInit', () => {
    const spy = jest.spyOn(loginService.userIsLoggedIn$, 'subscribe')
    component.ngOnInit()
    expect(spy).toHaveBeenCalled()
  })

  it('should call changeStatus when login button is clicked and user is not authorized', () => {
    // component.isAuthorized = false
    // fixture.detectChanges()

    jest.spyOn(component, 'changeStatus')

    const loginButton = fixture.debugElement.query(
      By.css('[data-testid="loginButton"]')
    )
    loginButton.triggerEventHandler('click', null)

    expect(component.changeStatus).toHaveBeenCalled()
  })

  it('should display currentUsername', () => {
    loginService.currentUsername = 'testUser'
    fixture.detectChanges()
    const usernameElement = fixture.debugElement.query(
      By.css('span')
    ).nativeElement
    expect(usernameElement.textContent).toBe('testUser')
  })
})
