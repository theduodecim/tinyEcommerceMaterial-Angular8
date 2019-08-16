import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { ProductsModel } from '../models/products/products.model';
import { delay } from 'rxjs/operators';
export class Data {
  constructor(
    public cartList: ProductsModel[],
    public totalPrice: number) { }
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public Data = new Data(
    [],  // cartList
    null, // totalPrice
  );
  public url = "assets/data/";

  public totalPrice = 0;
  constructor(public http: HttpClient, public snackBar: MatSnackBar) { }


  public getProducts(type): Observable<ProductsModel[]> {
    return this.http.get<ProductsModel[]>(this.url + type + '-products.json').pipe(
      delay(1000));
  }

  public getProductById(id): Observable<ProductsModel> {
    return this.http.get<ProductsModel>(this.url + 'product-' + id + '.json').pipe(
      delay(2000));
  }

  public addToCart(product: ProductsModel) {
    let message;
    let status;
    if (this.Data.cartList.filter(item => item.id === product.id)[0]) {
      message = 'The product ' + product.name + ' already added to cart.';
      status = 'error';
    } else {
      this.Data.totalPrice = null;
      this.Data.cartList.push(product);
      this.Data.cartList.forEach(product => {
        this.Data.totalPrice = this.Data.totalPrice + product.newPrice;
      });
      message = 'The product ' + product.name + ' has been added to cart.';
      status = 'success';
    }
    this.snackBar.open(message, '×', { panelClass: [status], verticalPosition: 'top', duration: 3000 });
  }

  public getDeliveryMethods() {
    return [
      { value: 'free', name: 'Free Delivery', desc: '$0.00 / Delivery in 7 to 14 business Days' },
      { value: 'standard', name: 'Standard Delivery', desc: '$7.99 / Delivery in 5 to 7 business Days' },
      { value: 'express', name: 'Express Delivery', desc: '$29.99 / Delivery in 1 business Days' }
    ];
  }

  public getMonths() {
    return [
      { value: '01', name: 'January' },
      { value: '02', name: 'February' },
      { value: '03', name: 'March' },
      { value: '04', name: 'April' },
      { value: '05', name: 'May' },
      { value: '06', name: 'June' },
      { value: '07', name: 'July' },
      { value: '08', name: 'August' },
      { value: '09', name: 'September' },
      { value: '10', name: 'October' },
      { value: '11', name: 'November' },
      { value: '12', name: 'December' }
    ]
  }

  public getYears() {
    return ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"]
  }

  public getCountries() {
    return [
      { name: 'Argentina', code: 'AR' },
      { name: 'Colombia', code: 'CO' },
      { name: 'Brazil', code: 'BR' },
      { name: 'Chile', code: 'CN' },
      { name: 'Uruguay', code: 'UY' },
      { name: 'Estados Unidos', code: 'EEUU' }
    ];
  }

}
