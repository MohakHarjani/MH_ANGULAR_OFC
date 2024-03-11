import { Component } from '@angular/core';
import { ContextService } from '../../services/context.service';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-listbook',
  standalone: true,
  imports: [],
  templateUrl: './listbook.component.html',
  styleUrl: './listbook.component.css'
})
export class ListbookComponent {
  
  context : ContextService;
  bookList : Book[];


  constructor(context : ContextService)
  {
    this.context = context;
    this.bookList = this.context.getBookList();
  }

}
