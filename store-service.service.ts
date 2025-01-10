import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreServiceService {
  private baseUrl = 'http://localhost:8080/api/stores'; // Adjust this URL based on your API

  constructor(private http: HttpClient) {}

  getStores(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  submitRating(storeId: number, rating: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/${storeId}/rate`, { rating });
  }
}
