import {
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { LocalStorageService } from 'src/app/services/local-data-storage.service';
  
  /** Pass untouched request through to the next request handler. */
  @Injectable()
  export class SessionInterceptor implements HttpInterceptor {
    constructor(private localStorageService: LocalStorageService) {}
  
    intercept(req: HttpRequest<any>, next: HttpHandler) {
      const sessionKey = this.localStorageService.getSessionKey();
  
      if (sessionKey.length>0) {
        const authReq = req.clone({
          headers: req.headers.set('Authorization', sessionKey),
        });
        return next.handle(authReq);
      }
  
      return next.handle(req);
    }
  }