import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { dataUser } from '../models/dataUser.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _authInfo$ = new BehaviorSubject<dataUser | null>(null);

  constructor() {
    const saved = localStorage.getItem('authInfo');
    if (saved) {
      this._authInfo$.next(JSON.parse(saved));
    }
  }

  setAuthInfo(info: dataUser) {
    this._authInfo$.next(info);
    localStorage.setItem('authInfo', JSON.stringify(info));
  }

  clearAuthInfo() {
    this._authInfo$.next(null);
    localStorage.removeItem('authInfo');
  }

  // Para leer de forma reactiva
  get authInfo$() {
    return this._authInfo$.asObservable();
  }

  // Para leer de forma directa (sincrónica)
  get authInfo(): dataUser | null {
    return this._authInfo$.value;
  }
}
