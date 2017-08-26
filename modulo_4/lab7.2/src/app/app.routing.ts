import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {DriversComponent} from "./drivers/drivers.component";
import {StudentsComponent} from "./students/students.component";
import {TeachersComponent} from "./teachers/teachers.component";
import {VehiclesComponent} from "./vehicles/vehicles.component";



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component:  HomeComponent},
  { path: 'drivers',  component:  DriversComponent},
  { path: 'students', component: StudentsComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}