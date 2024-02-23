export class Book 
{

  
    constructor (private _bookId: number = 0, private _bookName: string = "", private _bookPrice: number = 0)
    {

    }

    public get bookPrice(): number {
        return this._bookPrice;
    }
    public set bookPrice(value: number) {
        this._bookPrice = value;
    }
    public get bookName(): string {
        return this._bookName;
    }
    public set bookName(value: string) {
        this._bookName = value;
    }
    public get bookId(): number {
        return this._bookId;
    }
    public set bookId(value: number) {
        this._bookId = value;
    }
   

    // Overriding
    public toString() : string 
    {
        return `BookId : ${this._bookId}, 
                BookName : ${this._bookName}, 
                BookPrice : ${this._bookPrice}`
    }

}