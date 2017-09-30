import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {AddstudentPage} from "../addstudent/addstudent";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
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
