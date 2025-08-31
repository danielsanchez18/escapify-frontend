import { Injectable, signal } from '@angular/core';
import { CurrentUserResponse } from '@interfaces/authentication.interface';

@Injectable({ providedIn: 'root' })
export class AuthStore {
  private _user = signal<CurrentUserResponse | null>(null);
  private _isLoggedIn = signal(false);

  // getters
  readonly user = this._user.asReadonly();
  readonly isLoggedIn = this._isLoggedIn.asReadonly();

  // setters
  setUser(user: CurrentUserResponse | null) {
    this._user.set(user);
    this._isLoggedIn.set(!!user);
  }

  clear() {
    this._user.set(null);
    this._isLoggedIn.set(false);
  }

  get permissions(): string[] {
    return this._user()?.permissions ?? [];
  }

  hasPermission(permission: string): boolean {
    return this.permissions.includes(permission);
  }

}
