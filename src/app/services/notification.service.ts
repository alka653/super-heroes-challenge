import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private eventEmitter = new EventEmitter<any>();
  constructor() { }
  get notifySaveData(): EventEmitter<any> {
    return this.eventEmitter;
  }
}
