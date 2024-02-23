import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Book } from './model/Book';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : string;
  myBook: Book;
  bookList : Book[];
  status : string;
  //========================================================================================================
  constructor()
  {
    this.title = 'Book Management Application ';
    this.myBook = new Book(1, "Alphabets", 10);
    this.bookList = [];
    this.status = "Book details not yet submitted...Please Press the Submit Button"
  }
  //=====================================================================================================
  addBook() : void
  {
    if (this.myBook.bookId <= 0 || this.myBook.bookName == "" || this.myBook.bookPrice <= 0)
    {
        this.status = "Book validation failed due to following reason  : ";
        if (this.myBook.bookId <= 0)
         this.status += "BookId cannot be be 0 or -ve, ";
        if (this.myBook.bookName == "")
         this.status += " BookName cannot be blank, ";
        if (this.myBook.bookPrice <= 0)
         this.status += " BookPrice cannot be 0 or -ve";
    }
    else
    {
      this.bookList.push(this.myBook);
      this.status = this.myBook + " submitted successfully ...";
    }

    this.myBook = new Book();
  }
  //========================================================================================================
}
