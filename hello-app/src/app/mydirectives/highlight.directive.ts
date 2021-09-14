import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor')
  public bgColor:string = 'lightgreen';

  constructor(private elementRef:ElementRef, private renderer:Renderer2) {
    // console.log('Highlight directive object is created...')
    // console.log(this.elementRef)
    // this.elementRef.nativeElement.style.backgroundColor='lightblue'
    // this.elementRef.nativeElement.style.padding='5px'
    // this.elementRef.nativeElement.style.border='1px solid blue'
    //renderer.setStyle(elementRef.nativeElement, 'backgroundColor', 'orange')
   }

   @HostListener('mouseover')
   public changeColorOnMouseOver(){
     this.bgColor = 'red'
   }

   @HostListener('mouseout')
   public changeColorOnMouseOut(){
     this.bgColor = 'lightgreen'
   }
}
