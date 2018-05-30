import { NotifyCenterService } from './../_services/notify-center.service';
import { Observable, throwError } from 'rxjs';
import { Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse,
  HttpErrorResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private notifyCenterService: NotifyCenterService, private router: Router
  ) {

  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError((err: HttpErrorResponse) => {
      // console.log(err.status);
      if (err.error instanceof Error) {
        console.error('client side:', err.error.message);
      } else {
        switch (err.status) {
          case 0:
              this.notifyCenterService.sendNotifyCenter({ massage: 'Server not found...', status: err.error, details: null });
              this.router.navigate(['/login']);
              break;
          case 401:
            this.notifyCenterService.sendNotifyCenter({ massage: 'Please login...', status: err.error, details: null });
            localStorage.clear();
            this.router.navigate(['/login']);
            break;
          case 403:
            this.notifyCenterService.sendNotifyCenter({ massage: 'Username or password not match..', status: err.error, details: null });
            break;
          case 500:
            this.notifyCenterService.sendNotifyCenter({ massage: 'Please fix as soon as possible...', status: err.error, details: err });
            break;
          default:
            this.notifyCenterService.sendNotifyCenter({ massage: `Bug Erro ${err.error}`, status: err.error, details: err });
            break;
        }
        console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
      }
      // return Observable.of (new HttpResponse ({body: [{name: 'erro'}]})); // return default value
      // return Observable.empty<HttpEvent<any>>(); // return emty
      return throwError(err); // handle Error to service
    }));
  }
}
export let HttpErrorFilter = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpErrorInterceptor,
  multi: true
};
