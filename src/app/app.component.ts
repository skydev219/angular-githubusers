import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'githubusers';

  constructor() {
    document.body.style.backgroundColor = '#1878ff';
  }
}
