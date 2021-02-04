import { Component } from '@angular/core';
import {ServiceService} from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularServiceExample';

  constructor(private _servicee :ServiceService){}
  greetStudent(){
    this._servicee.sendMessage('Good Morning');
  }
  appreciateStudent(){
    this._servicee.sendMessage('Well Done');
  }
}
