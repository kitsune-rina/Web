export interface Company {
    id: number;
    name: string;
    description: string;
  }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';
import { Vacancy } from '../models/vacancy';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private API = 'http://localhost:4200/'; 

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.API}/companies/`);
  }

  getVacancies(companyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.API}/companies/${companyId}/vacancies/`);
  }
}
