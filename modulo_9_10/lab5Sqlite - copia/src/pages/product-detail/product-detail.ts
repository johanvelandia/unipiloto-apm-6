import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProductServiceProvider} from "../../providers/product-service/product-service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
  public product: {name: string, id: number} = {name: '', id: 0};
  private id: number = null;
  myForm1: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private productServiceProvider: ProductServiceProvider, public formBuilder: FormBuilder) {
    this.id = parseInt(navParams.get('id'));
    if (this.id) {
      this.productServiceProvider.getProduct(this.id)
        .then(result => {
          console.debug(result);
          this.product = result;
        })
        .catch(err=>console.error("error create product: ", err));
    }

    this.myForm1 = this.createForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
  }

  verModificar: boolean =false;

  public modificar(idProducto:number){
    console.log('Producto a actualizar '+ idProducto);
    this.verModificar=true;

  }

  private createForm() {
    return this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
    });
  }

  public updateProduct(id:number) {
     console.log('Producto a actualizar updateProduct '+ id);
    /*this.productServiceProvider.updateProduct(id,this.myForm1.value.name)
      .then(result => {
        console.debug(result);
        //this.dismiss();
      })
      .catch(err=>console.error("error update product: ", err));*/
  }

 

}
