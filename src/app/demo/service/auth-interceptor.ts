import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header
        if (this.auth.isAuthenticated) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.auth.access_token}`,
                }
            });
        }

        return next.handle(request);
    }
}
