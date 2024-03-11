

export class Book{

    private bookId : number;
    private bookName : string;
    private bookPrice : number;
    
    constructor(bookId : number, bookName : string = '     ', bookPrice : number = 0)
    {
        this.bookId = bookId;
        this.bookName = bookName;
        this.bookPrice = bookPrice;
    }
    public getBookId() : number
    { return this.bookId }

    public setBookId(bookId : number)
    {  this.bookId = bookId }

    public getBookName() : string
    { return this.bookName }

    public setBookName(bookName : string)
    {  this.bookName = bookName}

    public getBookPrice() : number
    { return this.bookPrice }

    public setBookPrice(bookPrice : number)
    {  this.bookPrice = bookPrice }

}