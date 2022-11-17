import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, User } from '../Model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private projectServiceURL = `http://localhost:8080`;

  constructor(private http: HttpClient) { }

  create(user: User): Observable<User> {
    return this.http.post<User>(
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


}
