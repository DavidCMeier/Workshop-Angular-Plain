import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { take } from "rxjs";

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be login', (done) => {
    const spy = jest.spyOn(Storage.prototype, 'setItem')

    service.login('admin', 'admin').subscribe(res => {
      expect(res).toEqual(true);
      expect(spy).toHaveBeenCalledWith('username', 'admin');
      done();
    });
  });
  it('should be isLoggedIn', (done) => {
    const spy = jest.spyOn(Storage.prototype, 'getItem')
    spy.mockReturnValueOnce('admin');

    service.isLoggedIn().subscribe(res => {
      expect(res).toEqual(true);
      expect(spy).toHaveBeenCalled();
      done();
    });
  });
  it('should be called to localStorage.removeItem', () => {
    const spy = jest.spyOn(Storage.prototype, 'removeItem')

    service.logout()
    expect(spy).toHaveBeenCalled();
  });
  it('should be check if email is example@example.com', (done) => {

    service.emailExists('example@example.com').pipe(take(1)).subscribe((res) => {
      expect(res).toEqual(true);
      done();
    });
  });

});
