import { inject, Injectable } from '@angular/core';
import { API_URL } from '../utils/api';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PaginatedResponse } from '@interfaces/paginated-response.interface';
import { Company } from '@interfaces/enterprise.interface';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private http = inject(HttpClient);
  private apiUrl = `${API_URL}/companies`;

  create(formData: FormData): Observable<Company> {
    return this.http.post<Company>(this.apiUrl, formData);
  }

  getById(id: string): Observable<Company> {
    return this.http.get<Company>(`${this.apiUrl}/${id}`);
  }

  getAll(page: number, size: number): Observable<PaginatedResponse<Company>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<PaginatedResponse<Company>>(this.apiUrl, { params });
  }

  search(
    name: string | null,
    tag: string | null,
    country: string | null,
    currency: string | null,
    startDate: string | null,
    endDate: string | null,
    enabled: boolean | null,
    deleted: boolean | null,
    page: number,
    size: number,
    sort: string
  ): Observable<PaginatedResponse<Company>> {

      let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sort', sort);

    if (name) params = params.set('name', name);
    if (tag) params = params.set('tag', tag);
    if (country) params = params.set('country', country);
    if (currency) params = params.set('currency', currency);
    if (startDate) params = params.set('startDate', startDate);
    if (endDate) params = params.set('endDate', endDate);
    if (enabled !== null) params = params.set('enabled', enabled.toString());
    if (deleted !== null) params = params.set('deleted', deleted.toString());

    return this.http.get<PaginatedResponse<Company>>(`${this.apiUrl}/search`, { params });
  }

  update(id: string, formData: FormData): Observable<Company> {
    return this.http.put<Company>(`${this.apiUrl}/${id}`, formData);
  }

  changeStatus(id: string): Observable<Company> {
    return this.http.put<Company>(`${this.apiUrl}/change-status/${id}`, {});
  }

  delete(id: string): Observable<Company> {
    return this.http.put<Company>(`${this.apiUrl}/delete/${id}`, {});
  }

  restore(id: string): Observable<Company> {
    return this.http.put<Company>(`${this.apiUrl}/restore/${id}`, {});
  }

}
