import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpEvent } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
       const idToken=localStorage.getItem("token");
       if(idToken){
        const cloned =req.clone({
            headers: req.headers.set("Authorization",
            "Bearer "+idToken)
        });
        return next.handle(cloned);
       }else{
           return next.handle(req);
       }
    }
}