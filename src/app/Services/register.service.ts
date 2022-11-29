import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, User } from '../Model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private projectServiceURL = `https://api-silicon-emporium.l80pptdp5a7ji.us-east-2.cs.amazonlightsail.com`;

  constructor(private http: HttpClient) { }

  create(user: User): Observable<String> {
    return this.http.post<String>(
      `${this.projectServiceURL}/auth/register`,
      user
    );
  }


  login(user: Login): Observable<String> {
    return this.http.post<String>(
      `${this.projectServiceURL}/auth/login`,
      user
    );
  }

  
  recoverpassword(user: Login): Observable<String> {
    return this.http.put<String>(
      `${this.projectServiceURL}/auth/reset`,
      user
    );
  }



}
