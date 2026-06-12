import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisablePaste]',
})
export class DisablePaste {
  
  @HostListener('copy',['$event'])
  @HostListener('paste',['$event'])
  onCopyOrPaste(event : any){
    event.preventDefault();
    alert('Copy Paste is not supported')
  }
}
