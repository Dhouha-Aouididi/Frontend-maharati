import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStickyHeader]'
})
export class StickyHeaderDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Add logic here to check scroll position and apply sticky behavior
    const element = this.elementRef.nativeElement;
    const offset = element.offsetTop;

    if (window.pageYOffset > offset) {
      // Apply sticky styles
      element.classList.add('sticky');
    } else {
      // Remove sticky styles
      element.classList.remove('sticky');
    }
  }
}
