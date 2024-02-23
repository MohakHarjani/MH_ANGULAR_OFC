import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit, OnChanges{

  @Input('initcolor') color1 : string;
  @Input() color2 : string;
  //ElementRef is a ref of elem in whoch this directive is used
  //ElementRef is a wrapper of element in which it is decclare
  //ElementRef wraps "HTMLInputElement"
  constructor(public elem : ElementRef, public renderer : Renderer2) 
  {
    this.color1 = 'yellow';
    this.color2 = 'green';
    this.renderer.setStyle(this.elem.nativeElement, 'background-color', this.color1); //wrong place
    this.renderer.setProperty(this.elem.nativeElement, 'innerHTML', 'OKOK') //wrong place


    console.log("Directive constructor called..");

  }

  //===================================================================================================
  ngOnChanges(changes: SimpleChanges): void {

    console.log("Directive's onChange() called " + this.color1)

  }
  ngOnInit(): void {
    this.renderer.setStyle(this.elem.nativeElement, 'background-color', this.color1);
    console.log("Directive's component onInit() called");
  }
  //==========================================================================================================
  //call-back  for mouse click....
  @HostListener('click')
  onClick()
  {
    this.renderer.setStyle(this.elem.nativeElement, 'background-color', this.color2);
     this.renderer.setProperty(this.elem.nativeElement, 'innerHTML', 'BIBI')

  }


}
