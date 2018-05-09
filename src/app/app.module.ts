
//Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

//devExtreme imports
import { DxButtonModule, DxBoxModule } from 'devextreme-angular'
import notify from 'devextreme/ui/notify'



//Application local imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlcssjavascriptComponent } from './basics/htmlcssjavascript/htmlcssjavascript.component';
import { WelcomeComponent } from './welcome.component';
import { UsingCssComponent } from './basics/htmlcssjavascript/using-css.component';
import { UsingJsComponent } from './basics/htmlcssjavascript/using-js.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { MatCardModule } from '@angular/material'





//External Imports

/**
 * commenting out moment and dateformat because stackblitz 
 * sees them as funcions instead of modules (because they are not angular specific, they are ES5/ES6 packages.)
 * 
 * uncomment them if you are on your local machine.
 */
/*
import * as moment from 'moment'
import * as dateFormat from 'dateformat';
*/



/***
 * Remember, whenever you import an ANGULAR package, 
 * you MUST put it in the imports array (modules), declarations array (components) or providers array(services)
 * 
 * If you forget to do this you will get an awesome console error about not being able to find the modules/service/component 
 * with an ng decorator.. There are some tricks thought.....
 * 
 * 
 * Specifically with modules, VScodes intellisence will attempt to import the package at the top correctly, if it can find it.
 * Additionally if you are using the angular cli (if you are not you need to start) you can register components/modules to the appropriot
 * app.module by using the --module=/path/to/module/name
 ***/

@NgModule({
  declarations: [
    AppComponent, //the app.component
    HtmlcssjavascriptComponent, //the Htmlcssjavascript.component
    WelcomeComponent, UsingCssComponent, UsingJsComponent, //the Welcome.component

    
  ],
  imports: [ //Modules and stuff. Hint... If it has Module in the name, it probably goes here
    BrowserModule, //every Angular CLI created project automagically associates this. This helps with cross browser compat.
    AppRoutingModule, //the routing module
    FormsModule, //allows us to use forms info such as two-way data binding, forms templates, etc.
    HttpClientModule, //allows us to use the Angular HTTP package for calling RESTful endpoints and looking at query params

    //this is stuff from devextreme... We will use and talk about it later, along with angular material.
    DxButtonModule,
    DxBoxModule,
    BrowserAnimationsModule,

    //This is stuff from angular materials
    MatProgressSpinnerModule,
    MatCardModule,
  ],
  providers: [ 
    //providers are services that *PROVIDE* something to the rest of the application. Mostly this is services, remember, things trickle down but do not bubble
    //up. If you register a service in the app.module it will be usable in ALL modules and their children below it. Register things in the app module that are
    //going to be used application wide.


  ],
  bootstrap: [ 
    //the component that Angular should call first. This is also known as the entrypoint. Angular CLI automagically generates the appModule and for anything
   // we do the default is JUST fine.

    AppComponent
  ]
})
export class AppModule { }
