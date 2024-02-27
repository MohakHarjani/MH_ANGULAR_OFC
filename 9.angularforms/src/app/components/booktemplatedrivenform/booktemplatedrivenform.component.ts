import { Component } from '@angular/core';
import { Book } from '../../model/Book';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-booktemplatedrivenform',
  standalone: true,
  imports: [CommonModule, FormsModule],

templateUrl: './booktemplatedrivenform.component.html',
  styleUrl: './booktemplatedrivenform.component.css'
})
export class BooktemplatedrivenformComponent {

  book : Book;

  constructor()
  {
    this.book = new Book(1, "Alphabets", 1000);
  }

  onSubmit(form : any)
  {
    console.dir(form);
  }

}
