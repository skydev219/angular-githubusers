import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProfileComponent } from './profile.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ProfileComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ProfileComponent);
    const profile = fixture.componentInstance;
    expect(profile).toBeTruthy();
  });
});
