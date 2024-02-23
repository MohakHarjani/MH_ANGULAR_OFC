import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeFontSize]',
  standalone: true
})
export class ChangeFontSizeDirective {

  @HostBinding("style.fontSize") fontSize !: string;

  @Input('appChangeFontSize') initFontSize! : string;
  @Input('clickFontSize') onClickFontSize! : string;

  constructor() { }

  ngOnInit()
  {
    this.fontSize = this.initFontSize;
  }

  @HostListener('click')
  onClick()
  {
    this.fontSize = this.onClickFontSize;
  }
}
