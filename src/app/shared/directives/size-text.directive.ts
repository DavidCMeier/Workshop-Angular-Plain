import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { Size } from "../models/size";

@Directive({
  selector: '[appSizeText]'
})
export class SizeTextDirective implements AfterViewInit {

  @Input() appSizeText!: Size;

  size= {
    [Size.SMALL]: '0.8rem',
    [Size.MEDIUM]: '1rem',
    [Size.LARGE]: '1.4rem'
  }
  constructor(private elRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.elRef.nativeElement.style.fontSize = this.size[this.appSizeText];
  }
}
