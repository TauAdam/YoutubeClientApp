import { Component } from '@angular/core'
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms'

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent {
  protected cardCreationForm = this.fb.group({
    title: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
    desc: ['', [Validators.maxLength(255)]],
    imageCover: ['', Validators.required],
    video: ['', Validators.required],
    date: ['', [Validators.required, this.dateNotInFuture()]],
    tags: this.fb.array([['', Validators.required]]),
  })

  public constructor(private fb: FormBuilder) {}

  protected resetForm() {
    this.cardCreationForm.setControl(
      'tags',
      this.fb.array([['', Validators.required]])
    )
    this.cardCreationForm.reset()
  }

  protected handleSubmit() {
    this.resetForm()
  }

  protected get title() {
    return this.cardCreationForm.get('title')
  }

  protected get desc() {
    return this.cardCreationForm.get('desc')
  }

  protected get image() {
    return this.cardCreationForm.get('imageCover')
  }

  protected get video() {
    return this.cardCreationForm.get('video')
  }

  protected get date() {
    return this.cardCreationForm.get('date')
  }

  protected get tags() {
    return this.cardCreationForm.get('tags') as FormArray
  }

  protected addTag() {
    if (this.tags.length < 5) {
      this.tags.push(new FormControl('', Validators.required))
    }
  }

  private dateNotInFuture() {
    return (control: AbstractControl) => {
      const selectedDate = new Date(control.value)
      const currentDate = new Date()

      if (selectedDate > currentDate) {
        return { invalidDate: true }
      }

      return null
    }
  }
}
