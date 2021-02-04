import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
private _teacherMessageSource = new Subject<string>();
_teacherMessageSource$ = this._teacherMessageSource.asObservable();

constructor() { }
sendMessage(message:string){
  this._teacherMessageSource.next(message);
}
}
