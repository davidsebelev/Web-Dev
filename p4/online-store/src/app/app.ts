import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventListComponent } from './event-list-component/event-list-component';

@Component({
  selector: 'app-root',
  imports: [EventListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('online-store');
}
