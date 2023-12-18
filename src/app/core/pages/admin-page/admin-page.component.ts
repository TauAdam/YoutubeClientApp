import { Component } from '@angular/core'
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'
import { Store } from '@ngrx/store'

import { createCustomCard } from '../../../redux/actions/custom-cards.actions.'
import { Video } from '../../../youtube/models/search-response.model'

interface CardCreationFormValues {
  title: string
  desc?: string
  imageCover: string
  video: string
  date: string
  tags: string[]
}
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent {
  protected cardCreationForm!: FormGroup

  public constructor(
    private fb: FormBuilder,
    private store: Store
  ) {
    this.cardCreationForm = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      desc: ['', [Validators.maxLength(255)]],
      imageCover: ['', Validators.required],
      video: ['', Validators.required],
      date: ['', [Validators.required, this.dateNotInFuture()]],
      tags: this.fb.array([['', Validators.required]]),
    })
  }

  protected resetForm() {
    this.cardCreationForm.setControl(
      'tags',
      this.fb.array([['', Validators.required]])
    )
    this.cardCreationForm.reset()
  }

  protected handleSubmit() {
    this.store.dispatch(
      createCustomCard({
        newItem: this.transformValues(this.cardCreationForm.value),
      })
    )
    this.resetForm()
  }

  private transformValues(values: CardCreationFormValues) {
    const transformedValues: Video = {
      id: 'your_id_value',
      snippet: {
        categoryId: '0',
        localized: {
          title: values.title,
          description: values.desc || '',
        },
        channelTitle: 'Admin channel',
        publishedAt: values.date,
        channelId: 'admin',
        title: values.title,
        description: values.desc || '',
        thumbnails: {
          default: {
            url: values.imageCover,
            width: 0,
            height: 0,
          },
          high: { height: 0, url: values.imageCover, width: 0 },
          maxres: { height: 0, url: values.imageCover, width: 0 },
          medium: { height: 0, url: values.imageCover, width: 0 },
          standard: { height: 0, url: values.imageCover, width: 0 },
        },
        liveBroadcastContent: 'none',
      },
      statistics: {
        viewCount: '0',
        favoriteCount: '0',
        commentCount: '0',
      },
    }

    return transformedValues
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
