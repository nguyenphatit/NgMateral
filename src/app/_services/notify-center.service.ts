import { NotifyCenter } from './../_models/notify-center';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable()
export class NotifyCenterService {
  private subject = new Subject<NotifyCenter>();
  constructor() { }
    sendNotifyCenter(notifyCenter: NotifyCenter) {
        this.subject.next(notifyCenter);
    }
    clearNotifyCenter() {
        this.subject.next();
    }
    getNotifyCenter(): Observable<NotifyCenter> {
        return this.subject.asObservable();
    }
}
