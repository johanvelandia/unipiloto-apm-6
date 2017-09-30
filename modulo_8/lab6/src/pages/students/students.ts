import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {AddstudentPage} from "../addstudent/addstudent";
//import { Person } from '../../models/person';
import { Student } from "../../models/student";


/**
 * Generated class for the StudentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-students',
  templateUrl: 'students.html',
})
export class StudentsPage {

  clasesE1: string[]=['español','sociales','matematicas'];

  estudiantes: Array<Student>=[new Student(1,15,'Juan','Lozano',['español','sociales','matematicas'],5,'4'),new Student(1,15,'Andrea','Lopez',['Quimica','Logica','matematicas'],5,'4')]; 	  

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController/*, public studiantes: Student*/) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentsPage');
  }

  presentProfileModal() {
    let profileModal = this.modalCtrl.create(AddstudentPage, { userId: 8675309, name: 'Alejandro' });
    profileModal.present();
    console.log('presentando modal');
  }

}
