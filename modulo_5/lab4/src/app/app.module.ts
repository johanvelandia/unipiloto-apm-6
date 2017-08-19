import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ //los que yo declaro
    AppComponent
  ],
  imports: [ // los modulos de terceros que yo uso
    BrowserModule,
	FormsModule
  ],
  providers: [], // los servicios que yo uso
  bootstrap: [AppComponent]
})
export class AppModule { }
