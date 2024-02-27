import { Pipe, PipeTransform } from "@angular/core";
import { Book } from "../../model/Book";


@Pipe({
    name : 'priceFilter',
    standalone : true
})
export class PriceFilter implements PipeTransform{



    transform(bookList: Book[], maxPrice : number) : any[]{
        
        if (maxPrice == 0)
          return bookList;

        return bookList.filter((book)=>{

            return book.bookPrice <= maxPrice;

        });
        
    }
    
}