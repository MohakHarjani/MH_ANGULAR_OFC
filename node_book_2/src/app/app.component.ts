import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterbookComponent } from "./components/registerbook/registerbook.component";
import { ListbookComponent } from "./components/listbook/listbook.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, RegisterbookComponent, ListbookComponent]
})

export class AppComponent {
  title = 'node_book_2';
}
