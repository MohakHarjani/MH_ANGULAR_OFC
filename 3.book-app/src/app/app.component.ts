import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyBookComponent } from './components/my-book/my-book.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,   MyBookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bookComponent';
}
