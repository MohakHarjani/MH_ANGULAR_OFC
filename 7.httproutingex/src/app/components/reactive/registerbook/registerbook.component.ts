import { Component } from '@angular/core';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookdaoService } from '../../../services/bookdao.service';
import { Router } from '@angular/router';
import { Book } from '../../../model/Book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registerbook2',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './registerbook.component.html',
  styleUrl: './registerbook.component.css'
})
export class RegisterbookComponent2 
{
  private bookService : BookdaoService;
  myBook : Book;
  status : string;
  static bookIdx : number = 1;
  bookForm !: FormGroup;


  constructor(bookService : BookdaoService, private router : Router, private fb : FormBuilder)
  {
    this.bookService = bookService;
    // this.bookIdx = 1;
    this.myBook = new Book(RegisterbookComponent2.bookIdx, "Alphabets", 10);
    this.status = "Book details not yet submitted....."
    this.createForm();
  }
  createForm()
  {
    this.bookForm = this.fb.group({

      id : [this.myBook.id, [Validators.min(1)] ],
      bookName : [this.myBook.bookName, [Validators.minLength(3), Validators.pattern('^[a-zA-Z]{5,15}$')]],
      bookPrice : [this.myBook.bookPrice, [Validators.min(100), Validators.max(10000)]]

    })
  }
  //===============================================================================================
  goList() : void{
    this.router.navigateByUrl('/reactive/listbooks');
  }
  //=============================================================================================
  addBook() : void
  {
    console.log(this.bookForm);

    let bookId = this.bookForm.value.id;
    let bookName = this.bookForm.value.bookName;
    let bookPrice = this.bookForm.value.bookPrice;

    this.myBook = new Book(bookId, bookName, bookPrice);


    let tempBook : Book = this.myBook;
    if (bookId <= 0 || bookName == "" || bookPrice <= 0)
    {
      this.status = "Book validation failed. Cannot add book......";
    }
    else
    {
        this.bookService.create(this.myBook).subscribe(
        {
          next : (res)=>{
            console.log(res);


           let b : Book = res;
            this.status = "Added " + " successfully....";  
            
          }, 
          error : (err)=>{
            this.status = "Book " + tempBook + "not posted ";
            RegisterbookComponent2.bookIdx = tempBook.id
            this.myBook.id = tempBook.id;
          }, 
          complete : ()=>{

          }
        }
        );
    }
    RegisterbookComponent2.bookIdx++;
    this.myBook = new Book(RegisterbookComponent2.bookIdx);

    // this.bookForm.value.id = RegisterbookComponent2.bookIdx;
    // this.bookForm.value.bookName = "";
    // this.bookForm.value.bookPrice = 0;
     this.createForm()
  }
  //==================================================================================================


}
