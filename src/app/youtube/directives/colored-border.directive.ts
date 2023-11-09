import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core'

@Directive({
  selector: '[appColoredBorder]',
})
export class ColoredBorderDirective implements OnInit {
  @Input() appColoredBorder = ''

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  getColor() {
    const currentDate = new Date()
    const publicationDate = new Date(this.appColoredBorder).getTime()
    const timeDifference = currentDate.getTime() - publicationDate
    const millisecondsInADay = 24 * 60 * 60 * 1000
    if (timeDifference > 6 * 30 * millisecondsInADay) {
      return 'red'
    }
    if (timeDifference > 30 * millisecondsInADay) {
      return 'yellow'
    }
    if (timeDifference > 7 * millisecondsInADay) {
      return 'green'
    }
    return 'blue'
  }

  setColor() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'border-bottom',
      `5px solid ${this.getColor()}`
    )
  }

  ngOnInit(): void {
    this.setColor()
  }
}
