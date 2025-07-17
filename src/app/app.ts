import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent, TeamComponent } from '@shared/navigation';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterLink, TeamComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-masterclass-book');
}
