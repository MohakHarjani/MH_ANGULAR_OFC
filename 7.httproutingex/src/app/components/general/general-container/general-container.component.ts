import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-general-container',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './general-container.component.html',
  styleUrl: './general-container.component.css'
})
export class GeneralContainerComponent {

}
