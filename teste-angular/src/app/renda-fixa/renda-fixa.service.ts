import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ApiResponse } from '../core/models/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class RendaFixaService {
  private baseURL = environment.server_url;

  constructor(private http: HttpClient) { }

  getRendasFixas(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseURL}/getFixedIncomeClassData`);
  }
}
