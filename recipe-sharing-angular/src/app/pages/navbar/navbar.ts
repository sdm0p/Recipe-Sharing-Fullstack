import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '../../services/Auth/auth-service';
import { MatAnchor, MatButton, MatButtonModule } from "@angular/material/button";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatIconModule,MatButtonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  user:any = null;
  constructor(public authService: AuthService, private router:Router) {}
  ngOnInit() {


    this.authService.authSubject.subscribe((auth) => {
      console.log('auth state ', auth);
      this.user = auth.user;
    });
  }
  handleLogout() {
    this.authService.logOut();
    // this.router.navigate(['/login']);
  }
}
