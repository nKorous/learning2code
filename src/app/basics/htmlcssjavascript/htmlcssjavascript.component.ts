import { Component, OnInit } from '@angular/core';
import { UsingCssComponent } from './using-css.component'

import notify from 'devextreme/ui/notify'
import * as dateFormat from 'dateformat'
import * as moment from 'moment'

@Component({
  selector: 'app-htmlcssjavascript',
  templateUrl: './htmlcssjavascript.component.html',
  styleUrls: ['./htmlcssjavascript.component.css']
})
export class HtmlcssjavascriptComponent implements OnInit {


  hideMe: boolean = true
  loadedInfo: string =''
  //todayValue = dateFormat(moment(), 'isoDateTime') //This is commented out because stackblitz doesnt like the package for some reason.....
  hasSubmitted: boolean = false
  showCSSStuff: boolean = false

  msg: string = ''
  num: string = ''

  cssShowButton: string = 'Show Some Cool CSS Struff'

  exampleTable = [
    { "id": 1,
      "first": "Row 1 Column 1" ,
      "second": "Row 1 Column 2",
      "third": "Row 1 Column 3",
      "fourth": "Row 1 Column 4",
    },
    { "id": 2,
      "first": "Row 2 Column 1",
      "second": "Row 2 Column 2",
      "third": "Row 2 Column 3",
      "fourth": "Row 2 Column 4",
  },
  { "id": 3,
    "first": "Row 3 Column 1",
    "second": "Row 3 Column 2",
    "third": "Row 3 Column 3",
    "fourth": "Row 3 Column 4",
},
  ]

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

  showInfo(data){
    this.loadedInfo = data.element.id
  }

  showForm(){
    this.hasSubmitted = true
  }

  showCSS(){
    this.showCSSStuff = !this.showCSSStuff
    this.cssButtonDisplay()
  }

  cssButtonDisplay(){
    if(this.showCSSStuff){
      this.cssShowButton = 'Show Some Cool HTML Stuff'
    }
    else if(!this.showCSSStuff){
      this.cssShowButton = 'Show Some Cool CSS Stuff'
    }
  }

  tryConsoleLog(){
    console.log(this.msg)

    console.log('pushed this button')

    
  }

  someName(data){

    console.log(data)

    data.element.innerText = 'I CHANGED A THING'
  }


}
