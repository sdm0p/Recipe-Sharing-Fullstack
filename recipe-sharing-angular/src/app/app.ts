import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './pages/navbar/navbar';
import { Footer } from './pages/footer/footer';
import { HomePage } from './pages/home-page/home-page';
import { Auth } from './pages/auth/auth';
import { AuthService } from './services/Auth/auth-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, HomePage, Auth],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  user: any = null;
  protected readonly title = signal('recipe-sharing-angular');
  constructor(public authService: AuthService) {}
  ngOnInit() {
    console.log('ngOnInit');

    this.authService.getUserProfile().subscribe({
      next: (data) => console.log('req', data),
      error: (err) => console.log('err', err),
    });
    this.authService.authSubject.subscribe((auth) => {
      console.log('auth state ', auth);
      this.user = auth.user;
    });
  }
}
