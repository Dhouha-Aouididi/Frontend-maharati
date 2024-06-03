import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../token-service/token-storage.service';
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(private tokenStorage: TokenStorageService) {} // Injectez le service de stockage du jeton

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.tokenStorage.getToken(); // Récupérez le jeton du stockage
    if (token != null) {
      authReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token), // Ajoutez le jeton aux en-têtes
        withCredentials: true
      });
    } else {
      authReq = req.clone({
        withCredentials: true
      });
    }
    return next.handle(authReq);
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];
