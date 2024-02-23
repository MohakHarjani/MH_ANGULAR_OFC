import { Component } from '@angular/core';

@Component({
  selector: 'app-registerbook',
  standalone: true,
  imports: [],
  templateUrl: './registerbook.component.html',
  styleUrl: './registerbook.component.css'
})
export class RegisterbookComponent {

  constructor()
  {
    console.log("Constructor of RegisterBook component called");
  }

  ngOnInit()
  {
    console.log("onInit() of RegisterBook called")
  }
  ngOnDestroy() : void{

    console.log("Destroy() of RegisterBook component called")
  }



}
