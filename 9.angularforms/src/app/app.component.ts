import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BooktemplatedrivenformComponent } from "./components/booktemplatedrivenform/booktemplatedrivenform.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, BooktemplatedrivenformComponent, RouterLink]
})
export class AppComponent {
  title = 'angularforms';
}
