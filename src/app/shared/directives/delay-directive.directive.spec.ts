import { DelayDirective } from './delay.directive';
import { Component } from "@angular/core";
import { async, ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from "@angular/core/testing";

describe('DelayDirectiveDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DelayDirective, TestComponent ]
    })
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    el = fixture.debugElement.nativeElement;
  });

  it('should show after the specified delay using fakeAsync', fakeAsync(() => {
    expect(el.innerHTML).not.toContain('test')
    fixture.detectChanges();
    tick(1000);
    expect(el.innerHTML).toContain('test')
  }));

  it('should show after the specified delay using waitForAsync', waitForAsync(() => {
    expect(el.innerHTML).not.toContain('test')
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(el.innerHTML).toContain('test')
    })
  }));
});

@Component({
  template: `
  
  <h2 *appDelayDirective="1000">test</h2>
  `
})
class TestComponent {
}
