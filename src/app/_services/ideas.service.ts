import { IdeasInt } from './../_models/interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IdeasService {

  baseUrl = 'http://localhost:3000/ideas';

  constructor(private http: HttpClient) {}

  getIdeas(): Observable<IdeasInt[]> {
    return this.http.get<IdeasInt[]>(this.baseUrl);
  }
  getIdeaById(id: number): Observable<IdeasInt> {
    return this.http.get<IdeasInt>(`${this.baseUrl}/${id}`);
  }
}
