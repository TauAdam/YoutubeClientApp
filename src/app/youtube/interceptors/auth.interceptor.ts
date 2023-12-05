import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const BASE_API_URL = 'https://www.googleapis.com/youtube/v3/'
    const YOUTUBE_API_KEY = 'AIzaSyBc0QTdotfjuDugdgCLM2KO8sG64x0hrvk'
    const newRequest = request.clone({
      url: BASE_API_URL + request.url,
      params: request.params.append('key', YOUTUBE_API_KEY),
    })
    return next.handle(newRequest)
  }
}
