import { HttpInterceptorFn } from '@angular/common/http';
import { retry } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(retry(2));
};
