import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UsersComponent } from './pages/users/users.component';
import { UserDetailComponent } from './pages/userDetail/userDetail.component';
import { GithubService } from './services/github.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    UsersComponent,
    UserDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [GithubService],
  bootstrap: [AppComponent],
})
export class AppModule {}
