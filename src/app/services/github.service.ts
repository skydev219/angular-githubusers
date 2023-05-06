import { Injectable } from '@angular/core';
import { HttpService } from '../shared/http.service';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private httpService: HttpService) {}

  getUsers() {
    return this.httpService.getUsers();
  }

  getUserDetail(userName: string) {
    return this.httpService.getUserDetail(userName);
  }
}
