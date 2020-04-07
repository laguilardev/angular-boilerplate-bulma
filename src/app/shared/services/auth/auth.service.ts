import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable, of } from 'rxjs';

import { LoginData, LoginResponse } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiBase: string = `${environment.api}/auth`;

  constructor(
    private http: HttpClient
  ) { }

  public login(loginData: LoginData): Observable<LoginResponse> {
    //return this.http.post(`${this.apiBase}/login`, loginData);
    return of({});
  }

  public logout(): void {
    // some code
    this.http.get(`${this.apiBase}/logout`);
  }

}