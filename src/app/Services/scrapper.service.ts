import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { item } from '../Model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ScrapperService {

  private projectServiceURL = `http://localhost:8080/search`;

  constructor(private http: HttpClient) { }

  getAllItems(product: string): Observable<item[]> {
    return this.http.get<item[]>(
      `${this.projectServiceURL}/${product}`
    );
  }

}
