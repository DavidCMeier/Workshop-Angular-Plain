import { SizeTextDirective } from './size-text.directive';
import { Size } from "../models/size";
import { Component, ElementRef } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe('SizeTextDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ SizeTextDirective, TestComponent ]
    })
      .createComponent(TestComponent);

    fixture.detectChanges(); // initial binding
  });

  it('should create an instance', () => {
    const directive = new SizeTextDirective(new ElementRef<TestComponent>(fixture.debugElement.nativeElement));
    expect(directive).toBeTruthy();
  });
  it('should be render with the correct fontSize', () => {
    const elements = fixture.debugElement.nativeElement.querySelectorAll('h2');
    const sizeLarge = elements[0].style.fontSize;
    expect(sizeLarge).toBe('1.4rem');
    const sizeSmall = elements[1].style.fontSize;
    expect(sizeSmall).toBe('0.8rem');
    const sizeMedium = elements[2].style.fontSize;
    expect(sizeMedium).toBe('1rem');
  });
});


@Component({
  template: `
  <h2 [appSizeText]="Size.LARGE">Text Large</h2>
  <h2 [appSizeText]="Size.SMALL">Text Small</h2>
  <h2 [appSizeText]="Size.MEDIUM">No Change</h2>
  `
})
class TestComponent {
  Size = Size;
}
