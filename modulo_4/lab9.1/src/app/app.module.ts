import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { EstudiantesComponent } from './pages/estudiantes/estudiantes.component';
import { EstudiantesDetailComponent } from './pages/estudiantes-detail/estudiantes-detail.component';
import {EstudiantesService} from "./service/estudiantes.service";
import {AppRoutingModule} from "./app.routing";
import {APP_BASE_HREF} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EstudiantesComponent,
    EstudiantesDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
        EstudiantesService,
    {
      provide: APP_BASE_HREF, useValue : '/'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
