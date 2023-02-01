import { TestBed } from '@angular/core/testing';

import { LoginGuard } from './login.guard';
import { RouterTestingModule } from "@angular/router/testing";

describe('LoginGuard', () => {
  let guard: LoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    guard = TestBed.inject(LoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
