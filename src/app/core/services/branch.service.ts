import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '@core/utils/api';
import { Branch } from '@interfaces/enterprise.interface';
import { PaginatedResponse } from '@interfaces/paginated-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  private http = inject(HttpClient);
  private apiUrl = `${API_URL}/branches`;

  create(formData: FormData): Observable<Branch> {
    return this.http.post<Branch>(this.apiUrl, formData);
  }

  getById(id: string): Observable<Branch> {
    return this.http.get<Branch>(`${this.apiUrl}/${id}`);
  }

  getAll(page: number, size: number): Observable<PaginatedResponse<Branch>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<PaginatedResponse<Branch>>(this.apiUrl, { params });
  }

  search(
    name: string | null,
    address: string | null,
    city: string | null,
    country: string | null,
    companyName: string | null,
    startDate: string | null,
    endDate: string | null,
    enabled: boolean | null,
    deleted: boolean | null,
    page: number,
    size: number,
    sort: string
  ): Observable<PaginatedResponse<Branch>> {

    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sort', sort);

    if (name) params = params.set('name', name);
    if (address) params = params.set('address', address);
    if (city) params = params.set('city', city);
    if (country) params = params.set('country', country);
    if (companyName) params = params.set('companyName', companyName);
    if (startDate) params = params.set('startDate', startDate);
    if (endDate) params = params.set('endDate', endDate);
    if (enabled !== null) params = params.set('enabled', enabled.toString());
    if (deleted !== null) params = params.set('deleted', deleted.toString());

    return this.http.get<PaginatedResponse<Branch>>(`${this.apiUrl}/search`, { params });
  }

  getByCompanyId(companyId: string, page: number, size: number): Observable<PaginatedResponse<Branch>> {
    const params = new HttpParams()
      .set('page', page?.toString())
      .set('size', size?.toString());

    return this.http.get<PaginatedResponse<Branch>>(`${this.apiUrl}/company/${companyId}`, { params });
  }

  update(id: string, formData: FormData): Observable<Branch> {
    return this.http.put<Branch>(`${this.apiUrl}/${id}`, formData);
  }

  changeStatus(id: string): Observable<Branch> {
    return this.http.put<Branch>(`${this.apiUrl}/change-status/${id}`, {});
  }

  delete(id: string): Observable<Branch> {
    return this.http.put<Branch>(`${this.apiUrl}/delete/${id}`, {});
  }

  restore(id: string): Observable<Branch> {
    return this.http.put<Branch>(`${this.apiUrl}/restore/${id}`, {});
  }

}
