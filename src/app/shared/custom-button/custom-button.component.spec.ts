import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'

import { CustomButtonComponent } from './custom-button.component'

describe('CustomButtonComponent', () => {
  let component: CustomButtonComponent
  let fixture: ComponentFixture<CustomButtonComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomButtonComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(CustomButtonComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create the component', () => {
    expect(component).toBeTruthy()
  })

  it('should apply custom class names to the button element', () => {
    component.classNames = 'custom-class another-class'
    fixture.detectChanges()

    const buttonElement = fixture.debugElement.query(By.css('button'))
      .nativeElement as HTMLElement
    expect(buttonElement.classList.contains('custom-class')).toBe(true)
    expect(buttonElement.classList.contains('another-class')).toBe(true)
  })
})
