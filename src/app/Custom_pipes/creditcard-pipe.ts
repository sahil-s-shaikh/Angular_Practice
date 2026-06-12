import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditcard',
})
export class CreditcardPipe implements PipeTransform {
  transform(cardno : string) {

   cardno = cardno.replace(/-/g,'');

  cardno = cardno.substring(0,16);

  return cardno.match(/.{1,4}/g)?.join('-')||'';

  }
  
}
