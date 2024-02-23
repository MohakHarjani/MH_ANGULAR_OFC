import { Component } from '@angular/core';

@Component({
  selector: 'app-listbook',
  standalone: true,
  imports: [],
  templateUrl: './listbook.component.html',
  styleUrl: './listbook.component.css'
})
export class ListbookComponent {
  constructor()
  {
    console.log("Constructor of ListBook component called");
  }

  ngOnInit()
  {
    console.log("onInit() of ListBook called")
  }
  ngOnDestroy() : void{

    console.log("Destroy() of ListBook component called")
  }


}
