import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://your-api-url.com/auth'; // URL API documentatr mejor esto

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const credentials = { email, password };

    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, credentials).pipe(
      map(response => {
        return response;
      }),
      catchError(error => {
        // Errors manage
        throw error;
      })
    );
  }

  logout(): void {
    // LogOut implementation, like set tokens to empty
  }
}
