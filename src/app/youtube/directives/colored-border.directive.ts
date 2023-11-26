import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core'

const MILLISECONDS_IN_A_DAY = 24 * 60 * 60 * 1000

@Directive({
  selector: '[appColoredBorder]',
})
export class ColoredBorderDirective implements OnInit {
  @Input() public appColoredBorder = ''

  public constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  public ngOnInit(): void {
    this.setColor()
  }

  private getColor() {
    const currentDate = new Date()
    const publicationDate = new Date(this.appColoredBorder).getTime()
    const timeDifference = currentDate.getTime() - publicationDate

    if (timeDifference > 6 * 30 * MILLISECONDS_IN_A_DAY) {
      return 'red'
    }
    if (timeDifference > 30 * MILLISECONDS_IN_A_DAY) {
      return 'yellow'
    }
    if (timeDifference > 7 * MILLISECONDS_IN_A_DAY) {
      return 'green'
    }
    return 'blue'
  }

  private setColor() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'border-bottom',
      `5px solid ${this.getColor()}`
    )
  }
}
