import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/interface';
import { GithubService } from 'src/app/services/github.service';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'userdetail-page',
  templateUrl: './userDetail.component.html',
  styleUrls: ['./userDetail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  title = 'User Detail';
  user?: User;

  constructor(
    private githubService: GithubService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userObs = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.githubService.getUserDetail(params.get('username')!)
      )
    );
    userObs.subscribe((data) => {
      this.user = data;
    });
  }
}
