import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-using-js',
  templateUrl: './using-js.component.html',
  styleUrls: ['./using-js.component.css']
})
export class UsingJsComponent implements OnInit {

  defHidden: boolean = true
  whyJS: boolean = true

  awesomeColor: string = ''
  awesomeBackground: string = 'white'
  hideFunc: boolean = true;
  hideVar: boolean = true;


  constructor() { }

  ngOnInit() {

    setInterval(() => {
      this.changeAwesomeColor()
    }, 2000)
  }

  hideDef(){
    this.defHidden = !this.defHidden
  }

  hideJSDef(){
    this.whyJS = !this.whyJS
  }

  hideFuncDef(){
    this.hideFunc = !this.hideFunc
  }

  hideVarDef(){
    this.hideVar = !this.hideVar
  }

  changeAwesomeColor(){
    if(this.awesomeColor === ''){
      this.awesomeColor = 'blue'
    }
    else if (this.awesomeColor === 'blue'){
      this.awesomeColor = 'darkgreen'
    }
    else if (this.awesomeColor === 'darkgreen'){
      this.awesomeColor = 'yellow'
      this.awesomeBackground ='black'
    }
    else if (this.awesomeColor === 'yellow'){
      this.awesomeColor = 'pink'
      this.awesomeBackground = 'lightgreen'
    }
    else if (this.awesomeColor === 'pink'){
      this.awesomeColor = 'orange'
      this.awesomeBackground = 'black'
    }
    else if (this.awesomeColor === 'orange'){
      this.awesomeColor = 'lightcyan'
    }
    else if (this.awesomeColor === 'lightcyan'){
      this.awesomeColor = 'bluegreen'
    }
    else if (this.awesomeColor === 'bluegreen'){
      this.awesomeColor = 'lightgray'
      this.awesomeBackground = 'red'
    }
    else if (this.awesomeColor === 'lightgray'){
      this.awesomeColor = 'black'
      this.awesomeBackground = 'lightyellow'
    }
    else if (this.awesomeColor === 'black'){
      this.awesomeColor = ''
      this.awesomeBackground = 'white'
    }
  }



}
