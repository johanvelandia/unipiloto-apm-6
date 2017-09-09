import { Injectable } from '@angular/core';
import {Product} from "../models/product";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'; //para observable
import {Observable} from 'rxjs/Rx'; //para observable
 

@Injectable()
export class ProductService {

  private productsURI = 'http://localhost:3000/api/products';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

   getProductsObservable(): Observable<Product[]> {
    return this.http.get(this.productsURI)
      .map(response => response.json().data as Product[])
      .catch(this.handleErrorObservable);
      //.toPromise()
      //.then(response => response.json().data as Product[])
      //.catch(this.handleError);
  }
  
  getProducts(): Promise<Product[]> {
    return this.http.get(this.productsURI)
      .toPromise()
      .then(response => response.json().data as Product[])
      .catch(this.handleError);
  }

  updateObservable(product: Product): Observable<Product> {
    const url = `${this.productsURI}/${product.id}`;
    return this.http
      .put(url, JSON.stringify(product), {headers: this.headers})
      .map(() => product)
      .catch(this.handleErrorObservable);
      //.toPromise()
      //.then(() => product)
      //.catch(this.handleError);
  }
  
  update(product: Product): Promise<Product> {
    const url = `${this.productsURI}/${product.id}`;
    return this.http
      .put(url, JSON.stringify(product), {headers: this.headers})
      .toPromise()
      .then(() => product)
      .catch(this.handleError);
  }

  create(name: string): Promise<Product> {

    return this.http
      .post(this.productsURI, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

   createObservable(name: string): Observable<Product> {

    return this.http
      .post(this.productsURI, JSON.stringify({name: name}), {headers: this.headers})
      .map(res => res.json().data)
      .catch(this.handleErrorObservable);
	  //.toPromise()
      //.then(res => res.json().data)
      //.catch(this.handleError);
  }
  
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  
  
   private handleErrorObservable(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }
}
