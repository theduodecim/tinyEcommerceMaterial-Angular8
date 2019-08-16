import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/products.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public productsService: ProductsService) { }

  ngOnInit() {
  }

  public remove(product) {
    const index: number = this.productsService.Data.cartList.indexOf(product);
    if (index !== -1) {
      this.productsService.Data.cartList.splice(index, 1);
      this.productsService.Data.totalPrice = this.productsService.Data.totalPrice - product.newPrice;
    }
  }

  public clear() {
    this.productsService.Data.cartList.length = 0;
  }

  public stopClickPropagate(event: any) {
    event.stopPropagation();
    event.preventDefault();
  }

}
