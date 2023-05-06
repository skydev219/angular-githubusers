import { Component, Input } from '@angular/core';
import { User } from 'src/app/interfaces/interface';

@Component({
  selector: 'profile-card',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  title = 'githubusers';
  @Input() user?: User;
}
