import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(dob: Date) {
    
    
    let birthDate = new Date(dob);

    let today = new Date();

    
    let age = today.getFullYear() - birthDate.getFullYear();

   
    let monthDiff = today.getMonth() - birthDate.getMonth();

    
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age + ' years old';
  }
}
