import { Component } from '@angular/core';
import { Book } from '../../model/Book';
import { FormsModule } from '@angular/forms';
import { BookdaoService } from '../../services/bookdao.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
    selector: 'app-listbook',
    standalone: true,
    templateUrl: './listbook.component.html',
    styleUrl: './listbook.component.css',
    imports: [CommonModule, FormsModule]
})
export class ListbookComponent {

  bookList: Book[];
  bookService: BookdaoService;
  isEditting: boolean;
  edittedBook!: Book;

  constructor(bookService: BookdaoService) {
    this.bookService = bookService;
    this.bookList = [];
    this.isEditting = false;

    

   

    bookService.getAll().subscribe({
      next : (res : Book[])=>{


        // console.log("Response for getAll() " + res);
        this.bookList = res;


        for (let book of this.bookList)
        {
          console.log(book)
        }
        this.isEditting = false;
        this.edittedBook = new Book();

      }, 
      error : (error)=>{
        
        console.log("Cannot get All books : (")

      }
    })


   

  }
  // delBook(b:Book)
  // {
  //   this.bookser.delete(b.id).subscribe(res=>{
  //     console.log('book with book id:'+b.id+' deleted successfully');
  //     this.bookser.getAll().subscribe((res:Book[])=>{
  //          console.log('after delete get fresh list of all books from server...');
  //          this.bookarr = res;
  //     })
  //   })

  
  // }
  deleteBook(bookId: number): void {
    console.log("BookId = " + bookId);
    this.bookService.delete(bookId).subscribe((res)=>{

      console.log('Book with bookId  ' + bookId + " deleted successfully");

      this.bookService.getAll().subscribe((res)=>{

        this.bookList = res;
  
      }); 

    })
    //fetch again after delete
    //updated the class prop, re-render it
    
  }
  // //========================================================================================================
  editBook(): void {;
    this.bookService.update(this.edittedBook.id, this.edittedBook)
    .subscribe((res)=>{

      this.bookService.getAll().subscribe((res)=>{
        this.bookList = res;
      });

    });

    this.isEditting = false;

 
  }
  populateEdittedBook (currBook : Book)
  {
    this.edittedBook = new Book(currBook.id, currBook.bookName, currBook.bookPrice);
    this.isEditting = true;
  }
  changeEditStatus(newStatus: boolean) {
    this.isEditting = newStatus;
  }
  // //=======================================================================================================
   fetchBooks(): void {
    this.bookService.getAll().subscribe({
      next : (res)=>{

        this.bookList = res;
        
      }
    });

  }

}
