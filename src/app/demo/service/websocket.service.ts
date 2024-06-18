import { Injectable } from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import {Topic, WebsocketMessage} from '../api/websocket';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '@environments/environment';
@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  prefix: string;
  subject: WebSocketSubject<WebsocketMessage>
 
  private dashboard$ = new BehaviorSubject<WebsocketMessage>({} as WebsocketMessage)
  constructor() {
    this.prefix = 'app';
    this.subscribeToMessages();
  }

  get DashboardSubscription(): Observable<WebsocketMessage> {
    return this.dashboard$.asObservable();
  }

  private subscribeToMessages() {
    this.subject?.unsubscribe();
    const endpoint = `${environment.wsProtocol}://${environment.domain}:7011`;
    this.subject = webSocket(endpoint);
    this.subject.subscribe(
      (message: WebsocketMessage) => {
        switch (message.topic) {
          case Topic.Dashboard:
            this.dashboard$.next(message)
            break;
        }
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('complete')
      }
    );
  }
}
