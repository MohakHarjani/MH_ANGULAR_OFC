import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-generalpipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generalpipe.component.html',
  styleUrl: './generalpipe.component.css'
})
export class GeneralpipeComponent {
  title = 'ang_ex8_pipes';
  x=100;
  y: Promise<string> | null = Promise.resolve("hello world");
  z: Observable<string> | null = of("hello world");
  //bookarr:Observable<Book[]> | null = this.httpser.get();
  x1 = new Date(2023, 1, 3, 1, 1, 1);
  x2 = 100.88;
  ob : { [k: string]: number } = {
    foo: 1,
    bar: 2,
    baz: 3
  };
  msg: string = "The Quick Brown FOX jumps over the lazy dog ";
  marks = 0.88888;

  myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved after 2 seconds.....");
    }, 2000);
  });

  myObservable = new Observable((subscriber) => {
    // subscriber.next(1);
    // subscriber.next(2);
    // subscriber.next(3);
    setTimeout(() => {
      subscriber.next(1);

    }, 1000);
    setTimeout(() => {
      subscriber.next(2);

    }, 2000);
    setTimeout(() => {
      subscriber.next(3);

    }, 3000);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 4000);
  });


  book = {
    bookId : 1,
    bookName : 'Harry Potter',
    bookPrice : 400
  }

}
