import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TestApiService {
  apiUrl: string = '';

  constructor(private http: HttpClient) {}

  getdata() {
    return this.http.get(this.apiUrl);
  }
}
