import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserInformationService {

  userRole = 'user';

  getUserRole(){
    return this.userRole;
  }
}
