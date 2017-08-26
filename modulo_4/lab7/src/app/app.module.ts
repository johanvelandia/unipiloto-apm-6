import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StudentDetailComponent } from '../pages/detail.student.component';
import { TeacherDetailComponent } from '../pages/detail.teacher.component';

//import {ProductDetailComponent} from '../pages/detail.component';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
	StudentDetailComponent,
	TeacherDetailComponent
  ],
  imports: [
    BrowserModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
