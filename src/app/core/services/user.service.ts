import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '@core/utils/api';
import { Company } from '@interfaces/enterprise.interface';
import { PaginatedResponse } from '@interfaces/paginated-response.interface';
import { User } from '@interfaces/users.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);
  private apiUrl = `${API_URL}/users`;

  create(formData: FormData): Observable<User> {
    return this.http.post<User>(this.apiUrl, formData);
  }

  getById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  getAll(page: number, size: number): Observable<PaginatedResponse<User>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<PaginatedResponse<User>>(this.apiUrl, { params });
  }

  search(
    fullName: string | null,
    email: string | null,
    provider: string | null,
    startDate: string | null,
    endDate: string | null,
    enabled: boolean | null,
    deleted: boolean | null,
    page: number,
    size: number,
    sort: string
  ): Observable<PaginatedResponse<User>> {

    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sort', sort);

    if (fullName) params = params.set('fullName', fullName);
    if (email) params = params.set('email', email);
    if (provider) params = params.set('provider', provider);
    if (startDate) params = params.set('startDate', startDate);
    if (endDate) params = params.set('endDate', endDate);
    if (enabled !== null) params = params.set('enabled', enabled.toString());
    if (deleted !== null) params = params.set('deleted', deleted.toString());

    return this.http.get<PaginatedResponse<User>>(`${this.apiUrl}/search`, { params });
  }

  update(id: string, formData: FormData): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, formData);
  }

  changeStatus(id: string): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/change-status/${id}`, {});
  }

  delete(id: string): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/delete/${id}`, {});
    }

    restore(id: string): Observable<Company> {
      return this.http.put<Company>(`${this.apiUrl}/restore/${id}`, {});
    }

}
