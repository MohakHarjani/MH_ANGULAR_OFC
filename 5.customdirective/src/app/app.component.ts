import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './directives/highlight.directive';
import { ChangeFontSizeDirective } from './directives/change-font-size.directive';
import { DomChangeDirective } from './directives/domchange.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HighlightDirective, ChangeFontSizeDirective, DomChangeDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnChanges{
  constructor()
  {
    console.log("App component's constructor called...")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("App component onChange() called........")
  }
  ngOnInit(): void {

    console.log("App component onInit() called.............");
  }
  title = 'customdirective';
}
