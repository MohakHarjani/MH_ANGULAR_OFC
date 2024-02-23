import { Injectable } from '@angular/core';
import { Book } from '../model/Book';

@Injectable({
  providedIn: 'root'
})
export class BookdaoService {

  bookList : Book[];

  constructor() 
  {
    this.bookList = [];

  }

  addBook(newBook : Book) : boolean
  {
    if (!newBook) 
      return false;

    console.log(newBook + " pushed....");
    this.bookList.push(newBook);
    return true;
  }

  getAllBooks() : Book[]
  {
    return this.bookList.slice();
  }

  deleteBook(bookId : number)
  {
    let foundIdx = -1;
    for (let i = 0; i < this.bookList.length; i++)
    {
      if (this.bookList[i].bookId == bookId)
      {
        foundIdx = i;
        break;
      }
    }
    this.bookList.splice(foundIdx, 1);
  }

  editBook(newBook :Book)
  {
    console.log("KAKAK " + newBook);
    for (let i = 0; i < this.bookList.length; i++)
    {
      if (this.bookList[i].bookId == newBook.bookId)
      {
        this.bookList[i].bookName = newBook.bookName;
        this.bookList[i].bookPrice = newBook.bookPrice;
      }
    }
  }




}
