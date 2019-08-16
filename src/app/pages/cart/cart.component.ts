import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  total = [];
  grandTotal = 0;

  constructor(public productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.Data.cartList.forEach(product => {
      this.total[product.id] = product.newPrice;
      this.grandTotal += product.newPrice;
    });
    console.log(this.grandTotal);
  }

  public getTotalPrice(value) {
    if (value) {
      this.total[value.productId] = value.total;
      this.grandTotal = 0;
      this.productsService.Data.cartList.forEach(prod => {
        if (prod.id === value.productId) {
          prod.quantityReq = value.soldQuantity;
          prod.quantityPrice = value.total;
        }
      });

      this.total.forEach(price => {
        this.grandTotal += price;
        this.productsService.totalPrice += price;
        console.log(this.grandTotal);
      });
    }
  }


  public remove(product) {
    const index: number = this.productsService.Data.cartList.indexOf(product);
    if (index !== -1) {
      this.productsService.Data.cartList.splice(index, 1);
      this.grandTotal = this.grandTotal - this.total[product.id];
      this.total.forEach(val => {
        if (val === this.total[product.id]) {
          this.total[product.id] = 0;
        }
      });
    }
  }

  public clear() {
    this.productsService.Data.cartList.length = 0;
  }


}
