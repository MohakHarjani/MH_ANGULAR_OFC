import { Component } from '@angular/core';

import { Book } from '../../model/Book';
import { FormsModule } from '@angular/forms';
import { BookdaoService } from '../../services/bookdao.service';
import { Router } from '@angular/router';

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
  static bookIdx : number = 1;


  constructor(bookService : BookdaoService, private router : Router)
  {
    this.bookService = bookService;
    // this.bookIdx = 1;
    this.myBook = new Book(RegisterbookComponent.bookIdx, "Alphabets", 10);
    this.status = "Book details not yet submitted....."
  }

  goList() : void{
    this.router.navigateByUrl('/listbooks');
  }

  addBook() : void
  {
    let tempBook : Book = this.myBook;
    if (this.myBook.id <= 0 || this.myBook.bookName == "" || this.myBook.bookPrice <= 0)
    {
      this.status = "Book validation failed. Cannot add book......";
    }
    else
    {
        this.bookService.create(this.myBook).subscribe(
        {
          next : (res)=>{

            // this.myBook = res;
            // console.log("Response => "  + res);
            console.log(res);


           let b : Book = res;
            this.status = "Added " + res.id + ",  " 
            res.bookName + ", " + res.bookPrice  + " successfully....";  
            
            
            // this.router.navigateByUrl('/home')
            
          }, 
          error : (err)=>{
            this.status = "Book " + tempBook + "not posted ";
            //this.router.navigateByUrl('/home')
            
            RegisterbookComponent.bookIdx = tempBook.id
            this.myBook.id = tempBook.id;
           

          }, 
          complete : ()=>{

          }
          
      
      
      
      
        }
        );
      

      
    }
    RegisterbookComponent.bookIdx++;
    this.myBook = new Book(RegisterbookComponent.bookIdx);

    
  }



}
