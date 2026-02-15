import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidenavbar',
  standalone: true,
  imports: [RouterLink],   // ← required
  templateUrl: './sidenavbar.html',
  styleUrl: './sidenavbar.scss',
})
export class Sidenavbar {
  constructor(private router: Router) {} 
  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
