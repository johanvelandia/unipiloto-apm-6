import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Device } from '@ionic-native/device';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 
  deviceModel :string;
  deviceUuid: string;

  constructor(public navCtrl: NavController, private device: Device) {
	console.log('Device UUID is: ' + this.device.uuid);
	this.deviceModel=device.model;
	this.deviceUuid=device.uuid;
	//this.device.uuid.then(() => console.log('Device UUID is: ' + this.device.uuid)).catch(e => console.log('Error generando uuid', e));  	
  	
  }

	//this.device.uuid.then(() => console.log('Device UUID is: ' + this.device.uuid))
	//  .catch(e => console.log('Error displaying dialog', e));

}
