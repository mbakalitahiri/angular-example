import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveComponent } from '@shared/forms/template-driven';
import { NavbarComponent } from '@shared/navigation';
@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet, ReactiveComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-masterclass-book');
}
