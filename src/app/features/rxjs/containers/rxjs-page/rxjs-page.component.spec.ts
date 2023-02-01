import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsPageComponent } from './rxjs-page.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('RxjsPageComponent', () => {
  let component: RxjsPageComponent;
  let fixture: ComponentFixture<RxjsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsPageComponent ],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
