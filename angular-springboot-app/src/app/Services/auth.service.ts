import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable, tap } from 'rxjs';

const authUrl = "http://localhost:8080/api/auth/login"
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  authenticate(credentials: {userName: string, password: string}): Observable<any> {
    return this.http.post<any>(authUrl, credentials).pipe(tap(response => {
      if (isPlatformBrowser(this.platformId)) {
        localStorage?.setItem("authToken", response?.token?.toString());
      }
    }));
  }

  isLoggedIn(): boolean {
    return !!localStorage?.getItem("authToken");
  } 

  getToken(): string | null {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem("authToken");
    }
    return "";
  } 
}
