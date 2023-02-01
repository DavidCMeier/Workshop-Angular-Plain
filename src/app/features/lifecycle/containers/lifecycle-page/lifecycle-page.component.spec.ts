import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyclePageComponent } from './lifecycle-page.component';
import { TitleComponent } from "../../components/title/title.component";
import { SizeTextDirective } from "../../../../shared/directives/size-text.directive";

describe('LifecyclePageComponent', () => {
  let component: LifecyclePageComponent;
  let fixture: ComponentFixture<LifecyclePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecyclePageComponent, TitleComponent, SizeTextDirective ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecyclePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(fixture).toMatchSnapshot();
  });

  it('should change title when click in button', () => {
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot()
  });
  it('should reverse word', () => {
    component.title = 'Hello';
    component.changeTitle();
    const result = 'olleH';
    expect(component.title).toBe(result)
  });
});
