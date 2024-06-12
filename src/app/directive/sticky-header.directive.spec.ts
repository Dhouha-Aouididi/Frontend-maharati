import { StickyHeaderDirective } from './sticky-header.directive';
import { ElementRef } from '@angular/core';

describe('StickyHeaderDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = jasmine.createSpyObj('ElementRef', ['nativeElement']);
    const directive = new StickyHeaderDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});
