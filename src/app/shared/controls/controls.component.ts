import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ProductsService } from '../../shared/products.service';
import { ProductsModel } from '../../models/products/products.model';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  @Input() product: ProductsModel;
  @Input() type: string;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onQuantityChange: EventEmitter<any> = new EventEmitter<any>();
  public count = 1;
  public align = 'center center';

  constructor(public productsService: ProductsService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    if (this.product) {
      // console.log(this.product);
    }
    this.layoutAlign();
  }

  public layoutAlign() {
    if (this.type === 'all') {
      this.align = 'space-between center';
    } else if (this.type === 'wish') {
      this.align = 'start center';
    } else {
      this.align = 'center center';
    }
  }

  public increment(count) {
    if (this.count < this.product.availibilityCount) {
      this.count++;
      // tslint:disable-next-line:prefer-const
      let obj = {
        productId: this.product.id,
        soldQuantity: this.count,
        total: this.count * this.product.newPrice
      };
      this.changeQuantity(obj);
    } else {
      this.snackBar.open('You can not choose more items than available. In stock ' +
        this.count + ' items.', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    }
  }

  public decrement(count) {
    if (this.count > 1) {
      this.count--;
      // tslint:disable-next-line:prefer-const
      let obj = {
        productId: this.product.id,
        soldQuantity: this.count,
        total: this.count * this.product.newPrice
      };
      this.changeQuantity(obj);
    }
  }

  public addToCart(product: ProductsModel) {
    this.productsService.addToCart(product);
  }

  public changeQuantity(value) {
    this.onQuantityChange.emit(value);
  }



}
