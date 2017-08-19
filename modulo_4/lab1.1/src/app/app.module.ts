import { BrowserModule } from '@angular/platform-browser'; //se refiere a que se va a ejecutar en un navegador
import { NgModule } from '@angular/core'; //

import { AppComponent } from './app.component'; //donde arrancala aplicacion

@NgModule({ // defino los componentes que va arrancar 
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
