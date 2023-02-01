import { Injectable } from '@angular/core';
import { map, Observable, of, timer } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string): Observable<boolean> {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('username', username);
      return of(true);
    }
    return of(false);
  }

  isLoggedIn(): Observable<boolean> {
    return of(localStorage.getItem('username') !== null);
  }

  logout(): void {
    localStorage.removeItem('username');
  }

  emailExists(email: string): Observable<boolean> {
    return timer(100).pipe(map(() => email === 'example@example.com'))
  }

}
