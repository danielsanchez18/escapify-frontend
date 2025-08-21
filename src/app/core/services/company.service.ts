import { Injectable } from '@angular/core';
import { API_URL } from '../utils/api';
import { Company } from '@interfaces/company.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PaginatedResponse } from '@interfaces/paginated-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private apiUrl = `${API_URL}/company`;

  constructor(
    private http: HttpClient
  ) { }

  create(formData: FormData): Observable<Company> {
    return this.http.post<Company>(this.apiUrl, formData);
  }

  getCompanyById(id: string): Observable<Company> {
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
    startDate: string | null,
    endDate: string | null,
    enabled: boolean | null,
    page: number,
    size: number
  ): Observable<PaginatedResponse<Company>> {

      let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (name) params = params.set('name', name);
    if (startDate) params = params.set('startDate', startDate);
    if (endDate) params = params.set('endDate', endDate);
    if (enabled !== null) params = params.set('enabled', enabled.toString());

    return this.http.get<PaginatedResponse<Company>>(`${this.apiUrl}/search`, { params });
  }

  update(id: string, formData: FormData): Observable<Company> {
    return this.http.put<Company>(`${this.apiUrl}/${id}`, formData);
  }

  deleteCompany(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
