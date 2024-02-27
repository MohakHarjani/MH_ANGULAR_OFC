import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor()
  {
    console.log("Constructor of Home component called");
  }
  ngOnInit()
  {
    console.log("onInit() of Home called")
  }

  ngOnDestroy() : void{

    console.log("Destroy() of Home component called")
  }

}
