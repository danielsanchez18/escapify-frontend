import { Injectable } from '@angular/core';
import { API_URL } from '../utils/api';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private baseUrl: string = `${API_URL}/`;

  constructor() { }

  // Método para obtener la URL completa de la imagen
  getImageUrl(relativePath: string): string {
    return this.baseUrl + relativePath;
  }

}
