import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy } from '../models/vacancy';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private apiUrl = 'http://127.0.0.1:8000/api/companies/';
  private apiUrl2 = 'http://127.0.0.1:8000/api/vacancies/';

  constructor(private http: HttpClient) { }

  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(this.apiUrl2);
  }

  getVacanciesByCompanyId(companyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiUrl}${companyId}/vacancies/`);
  }
}
