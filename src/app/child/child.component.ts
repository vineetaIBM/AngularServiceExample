import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private _servicee :ServiceService){}

  ngOnInit(){
    this._servicee._teacherMessageSource$.subscribe(Message=>
    {
      if(Message == 'Good Morning'){
        alert('Good morning Teacher');
      }else if(Message == 'Well Done')
      alert('Thank you Teacher');
    });  
    }

}
