import { Directive, ElementRef, Input, OnInit } from '@angular/core'

@Directive({
  selector: '[appColoredBorder]',
})
export class ColoredBorderDirective implements OnInit {
  @Input() appColoredBorder!: string

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

  ngOnInit(): void {
    if (this.appColoredBorder) {
      this.elementRef.nativeElement.style.borderBottom = `5px solid ${this.getColor()}`
    }
  }

  constructor(private elementRef: ElementRef) {}
}
