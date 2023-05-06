import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { User } from 'src/app/interfaces/interface';

@Component({
  selector: 'users-page',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  title = 'User List';
  userList: User[] = [];

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.githubService.getUsers().subscribe((data) => {
      this.userList = data;
    });
  }
}
