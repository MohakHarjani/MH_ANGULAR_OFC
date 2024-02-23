import { Component } from '@angular/core';
import { Book } from '../../model/Book';
import { BookdaoService } from '../../service/bookdao.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listbook',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './listbook.component.html',
  styleUrl: './listbook.component.css'
})
export class ListbookComponent {

  bookList: Book[];
  bookService: BookdaoService;
  isEditting: boolean;
  edittedBook : Book;

  constructor(bookService: BookdaoService) {
    this.bookService = bookService;
    this.bookList = bookService.getAllBooks();
    this.isEditting = false;
    this.edittedBook = new Book();

  }

  deleteBook(bookId: number): void {
    this.bookService.deleteBook(bookId);
    //fetch again after delete
    this.bookList = this.bookService.getAllBooks(); //updated the class prop, re-render it
  }
  //========================================================================================================
  editBook(): void {;
    this.bookService.editBook(this.edittedBook);
    this.isEditting = false;
    this.bookList = this.bookService.getAllBooks();
  }
  populateEdittedBook (currBook : Book)
  {
    this.edittedBook = new Book(currBook.bookId, currBook.bookName, currBook.bookPrice);
    this.isEditting = true;
  }
  changeEditStatus(newStatus: boolean) {
    this.isEditting = newStatus;
  }
  //=======================================================================================================
  fetchBooks(): void {
    this.bookList = this.bookService.getAllBooks();

  }
}
