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

  putIdea(id: number, idea: IdeasInt): Observable<IdeasInt> {
    return this.http.put<IdeasInt>(`${this.baseUrl}/${id}`, idea);
  }
  deleteIdea(id: number): Observable<IdeasInt> {
    return this.http.delete<IdeasInt>(`${this.baseUrl}/${id}`);
  }

  postIdea(idea: IdeasInt): Observable<IdeasInt>{
    return this.http.post<IdeasInt>(this.baseUrl, idea);
  }
}
