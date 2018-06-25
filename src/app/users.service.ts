import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'https://jsonplaceholder.typicode.com/';
  constructor(private _httpClient: HttpClient) {}
  getUsers(): Observable<any> {
    return this._httpClient.get(this.url + `users`);
  }

  postUsers(data): Observable<any> {
    return this._httpClient.post(this.url + `users`, data);
  }
}
