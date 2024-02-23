import { Directive, ElementRef,HostListener,Input,Renderer2,OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
 
@Directive({
  selector: '[domchange]',
  standalone: true
})
export class DomChangeDirective implements OnInit,OnDestroy {
 
    div!:any;
  constructor(public elem:ElementRef,public  renderer: Renderer2) {  }
   
 
  ngOnInit(): void {
    let greet = this.renderer.createText(', how are you!');
    this.renderer.appendChild(this.elem.nativeElement, greet);
 
    }
 
 
  @HostListener('mouseenter') //listen/handle to host element events
   mouseover(eventData:Event)
   {
 
   //add the child element to host element-div
     this.div = this.renderer.createElement('div');
    const text = this.renderer.createText('Inserted at bottom');
    this.renderer.appendChild(this.div, text);    
    this.renderer.appendChild(this.elem.nativeElement, this.div);
 
   
   }
 
   @HostListener('mouseleave')
   mouseleave(eventData:Event)
   {
       //remove the added child-element from the host element div.
      this.renderer.removeChild(this.elem.nativeElement,this.div);
   }
  ngOnDestroy()
  {
    console.log('directive onchnage on destroy called..');
  }
 
 
}
 