import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HeartButtonComponent } from './heart-button.component'

describe('HeartButtonComponent', () => {
  let component: HeartButtonComponent
  let fixture: ComponentFixture<HeartButtonComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeartButtonComponent],
    })
    fixture = TestBed.createComponent(HeartButtonComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
