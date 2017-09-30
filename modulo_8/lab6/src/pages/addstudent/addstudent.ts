import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AddstudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addstudent',
  templateUrl: 'addstudent.html',
})
export class AddstudentPage {
  myForm: FormGroup;
  
  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams, private storage: Storage,public formBuilder: FormBuilder) {
  	this.myForm = this.createForm();
  }

  private createForm() {
    return this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      last_name: ['', Validators.required],
      email: ['', Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')],
      date_birth: ['', Validators.required],
      passwd: this.formBuilder.group({
        password: ['', Validators.required],
        password_confirmation: ['', Validators.required]
      }),
      gender: ['', Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddstudentPage');
  }

   dismiss() {
    this.viewCtrl.dismiss();
  }

}
