import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserInformationService } from '../Services/user-information-service';

export const uplodeGurdGuard: CanActivateFn = (route, state) => {

 let userInformationService = inject(UserInformationService);

 if(userInformationService.getUserRole()=='Admin'){
return true;
 }
 else{
  alert('You Can Not Access This Featuer');
  return false;
 }
  
};
