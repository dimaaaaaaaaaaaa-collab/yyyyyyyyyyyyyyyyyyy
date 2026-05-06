import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Admin {
  id: string;
  name: string;
  email: string;
  role?: string;
  createdAt?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private readonly BASE_URL = `${environment.apiUrl}/admins`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.BASE_URL);
  }

  getById(id: string): Observable<Admin> {
    return this.http.get<Admin>(`${this.BASE_URL}/${id}`);
  }

  create(data: Omit<Admin, 'id'>): Observable<Admin> {
    return this.http.post<Admin>(this.BASE_URL, data);
  }

  update(id: string, data: Partial<Admin>): Observable<Admin> {
    return this.http.patch<Admin>(`${this.BASE_URL}/${id}`, data);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/${id}`);
  }
}
