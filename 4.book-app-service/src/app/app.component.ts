import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ListbookComponent } from './components/listbook/listbook.component';
import { RegisterbookComponent } from './components/registerbook/registerbook.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,   ListbookComponent, RegisterbookComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bookComponent';
}
