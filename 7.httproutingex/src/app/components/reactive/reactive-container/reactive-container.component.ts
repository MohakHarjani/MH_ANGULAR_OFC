import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-reactive-container2',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './reactive-container.component.html',
  styleUrl: './reactive-container.component.css'
})
export class ReactiveContainerComponent {

}
