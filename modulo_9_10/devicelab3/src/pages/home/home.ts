import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Device } from '@ionic-native/device';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 
  constructor(public navCtrl: NavController, public device: Device) {
	
	this.device.uuid.then(() => console.log('Device UUID is: ' + this.device.uuid))
	.catch(e => console.log('Error generando uuid', e));  	
  	
  }

	//this.device.uuid.then(() => console.log('Device UUID is: ' + this.device.uuid))
	//  .catch(e => console.log('Error displaying dialog', e));

}
