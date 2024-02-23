import { Component } from '@angular/core';
import { BookdaoService } from '../../service/bookdao.service';
import { Book } from '../../model/Book';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registerbook',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registerbook.component.html',
  styleUrl: './registerbook.component.css'
})
export class RegisterbookComponent 
{
  private bookService : BookdaoService;
  myBook : Book;
  status : string;
  bookIdx : number;


  constructor(bookService : BookdaoService)
  {
    this.bookService = bookService;
    this.bookIdx = 1;
    this.myBook = new Book(this.bookIdx, "Alphabets", 10);
    this.status = "Book details not yet submitted....."
  }


  addBook() : void
  {
    if (this.myBook.bookId <= 0 || this.myBook.bookName == "" || this.myBook.bookPrice <= 0)
    {
      this.status = "Book validation failed. Cannot add book......";
    }
    else
    {
      this.bookService.addBook(this.myBook);
      this.status = "Added " + this.myBook + " successfully....";
      this.bookIdx++;
      
    }
    this.myBook = new Book(this.bookIdx);

    
  }



}
