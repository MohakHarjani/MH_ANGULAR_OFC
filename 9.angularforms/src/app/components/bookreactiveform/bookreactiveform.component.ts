import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bookreactiveform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './bookreactiveform.component.html',
  styleUrl: './bookreactiveform.component.css'
})
export class BookreactiveformComponent {

  bookForm! : FormGroup;


  constructor(private fb : FormBuilder)
  {
    this.createForm();
  }


  createForm()
  {
    this.bookForm = this.fb.group({

      bookId : [1, [Validators.min(1)]],

      bookName: ['HarryPotter',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{5,15}$') ]],

      bookPrice : [1000, [Validators.min(100), Validators.max(10000)]]

    })
  }

  bookSubmit() : void{

  }
}
