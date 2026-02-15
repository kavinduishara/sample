import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidenavbar } from '../../components/sidenavbar/sidenavbar';

@Component({
  selector: 'app-layout',
  imports: [Sidenavbar, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
