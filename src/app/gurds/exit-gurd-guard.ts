import { CanDeactivateFn } from '@angular/router';

export const exitGurdGuard: CanDeactivateFn<unknown> = (
  component:any,
  currentRoute,
  currentState,
  nextState,
) => {
  if(component.hasChanes){
alert('Please Save The Changes Before Leaving the page!')
return false
  }
  else{
  return true;}
};
