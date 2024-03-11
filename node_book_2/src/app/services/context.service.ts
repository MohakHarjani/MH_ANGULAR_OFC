import { Injectable } from '@angular/core';
import { Book } from '../models/Book';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  private bookList : Book[];
  private book : Book;
  private apiService : ApiService;

  constructor(apiService : ApiService) 
  {
    apiService.getBooks();
    this.bookList = [];
    this.book = new Book(1)
    this.apiService = apiService;

    
  }

  public getBook () : Book
  { return this.book }

  public setBook (newBook : Book)
  { this.book = newBook; }

  public getBookList () : Book[]
  { return this.bookList; }

  public setBookList (newBookList : Book[]) 
  { this.bookList = newBookList; }




}
