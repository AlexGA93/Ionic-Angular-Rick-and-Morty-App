import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response, Result } from '../types/UsersTypes';

@Injectable({
  providedIn: 'root'
})
export class UserslistService {

  private _apiQuery: string = "https://rickandmortyapi.com/api/character";

  constructor( private http: HttpClient ) { }

  getUsers(): Observable<Response>{
    return this.http.get<Response>(this._apiQuery);
  }

  getUserInformation(characterId: string): Observable<Result>{
    return this.http.get<Result>(`${this._apiQuery}/${characterId}`)
  }
}
