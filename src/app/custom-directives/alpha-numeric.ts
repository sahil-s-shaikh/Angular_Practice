import { Directive, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAlphaNumeric]',
})
export class AlphaNumeric {
  constructor(private renderer:Renderer2) {}

  @HostListener('input',['$event'])
  onInpot(event:any){
let rawValue=event.target.value;
let sanitizedValue=rawValue.replace(/[^a-zA-Z0-9]/g,'');
console.log(sanitizedValue);
if(rawValue !==sanitizedValue){
  this.renderer.setProperty(event.target,'value',sanitizedValue)
}
  }
}
