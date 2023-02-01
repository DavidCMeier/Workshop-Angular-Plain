import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesPageComponent } from './directives-page.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MatRadioModule } from "@angular/material/radio";
import { FormsModule } from "@angular/forms";

describe('DirectivesPageComponent', () => {
  let component: DirectivesPageComponent;
  let fixture: ComponentFixture<DirectivesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesPageComponent ],
      imports: [HttpClientTestingModule, MatRadioModule, FormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
