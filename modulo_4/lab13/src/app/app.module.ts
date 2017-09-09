import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductsComponent } from './pages/products/products.component';
import { SalesInvoiceComponent } from './pages/sales-invoice/sales-invoice.component';
import { SalesInvoiceDetailComponent } from './pages/sales-invoice-detail/sales-invoice-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    HomeComponent,
    ProductDetailComponent,
    ProductsComponent,
    SalesInvoiceComponent,
    SalesInvoiceDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
