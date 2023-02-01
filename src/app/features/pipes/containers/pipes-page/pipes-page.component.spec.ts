import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesPageComponent } from './pipes-page.component';
import { CapitalizePipe } from "../../../../shared/pipes/capitalize.pipe";

describe('PipesPageComponent', () => {
  let component: PipesPageComponent;
  let fixture: ComponentFixture<PipesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesPageComponent, CapitalizePipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be pass the snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
