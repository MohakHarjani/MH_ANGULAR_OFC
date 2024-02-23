import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
   templateUrl: './app.component.html',
   styleUrl: './app.component.css'
})
export class AppComponent {
  title:string;
  sampleBook : {bookName : string, bookPrice : number}; 
  favouriteBook! : { bookName: string; bookPrice: number; };  //adding "!" to disable forced initializing
  newBook! : {bookName : string, bookPrice : number};

  constructor()
  {
    this.title = "My First Book Store";

    this.sampleBook = {
      bookName : "A Man called Ove",
      bookPrice : 110
    };

    this.newBook = {bookName : "Java", bookPrice : 9}   //without initializing it's not tracking :(
  }

  addBookDetails(favBookNameInput : HTMLInputElement, favBookPriceInput : HTMLInputElement)
  {
    this.favouriteBook = {
      bookName :  favBookNameInput.value,
      bookPrice :  parseInt(favBookPriceInput.value)
    };

  }
  
}
