import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFilmComponent } from './card-film.component';
import { MatCardModule } from "@angular/material/card";

describe('CardFilmComponent', () => {
  let component: CardFilmComponent;
  let fixture: ComponentFixture<CardFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFilmComponent ],
      imports: [MatCardModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFilmComponent);
    component = fixture.componentInstance;
    component.film = {director: "", image: "", title: "", year: ""}
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
