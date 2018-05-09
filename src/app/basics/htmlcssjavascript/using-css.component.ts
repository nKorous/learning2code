import { Component, OnInit } from '@angular/core';

import notify from 'devextreme/ui/notify'

@Component({
  selector: 'app-using-css',
  templateUrl: './using-css.component.html',
  styleUrls: ['./using-css.component.css']
})
export class UsingCssComponent implements OnInit {

  hideMe: boolean = false

  constructor() { }

  ngOnInit() {
  }

  foo(){
    this.hideMe = !this.hideMe
    if(!this.hideMe){
      notify('You are showing stuff', 'success', 2500)
    }

    if(this.hideMe){
      notify('You are hiding stuff', 'info', 2500)
    }
    
  }

}
