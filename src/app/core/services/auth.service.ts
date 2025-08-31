import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthRequest, AuthResponse, CurrentUserResponse } from '../interfaces/authentication.interface';
import { firstValueFrom } from 'rxjs';
import { AuthStore } from '../auth/auth.store';
import { TokenStorage } from '../auth/token-storage';
import { API_URL } from '@core/utils/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private store = inject(AuthStore);

  private API_URL = `${API_URL}/auth`;

  // Metodo para iniciar sesion
  async login(data: AuthRequest): Promise<void> {
    const res = await firstValueFrom(this.http.post<AuthResponse>(`${this.API_URL}/login`, data));
    TokenStorage.setTokens(res.accessToken, res.refreshToken);
    await this.loadCurrentUser();
  }

  // Metodo para cargar el usuario actual
  async loadCurrentUser(): Promise<void> {
    const token = TokenStorage.getAccessToken();
    if (!token) {
      this.store.clear();
      return;
    }

    try {
      const user = await firstValueFrom(
        this.http.get<CurrentUserResponse>(`${this.API_URL}/current-user`)
      );
      this.store.setUser(user);
    } catch (err) {
      this.logout();
    }
  }

  // Metodo para cerrar sesion
  logout() {
    TokenStorage.clear();
    this.store.clear();
  }
}
