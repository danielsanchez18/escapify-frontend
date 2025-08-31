import { Injectable } from '@angular/core';
import { API_URL } from '../utils/api';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private baseUrl: string = `${API_URL}/`;

  constructor() { }

  // Método para obtener la URL completa de la imagen (sin autenticación)
  getImageUrl(relativePath: string): string {
    return this.baseUrl + relativePath;
  }

  // Método para obtener la imagen protegida por token y retornarla como blob URL
  async getProtectedImageUrl(relativePath: string, token: string): Promise<string> {
    const url = this.baseUrl + relativePath;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if (!response.ok) {
      return '/img/logo-min.png'; // Imagen por defecto si falla
    }
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  }

}
