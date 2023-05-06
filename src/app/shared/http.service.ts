import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/interface';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>('https://api.github.com/users');
  }

  getUserDetail(userName: string) {
    return this.http.get<User>(`https://api.github.com/users/${userName}`);
  }
}
