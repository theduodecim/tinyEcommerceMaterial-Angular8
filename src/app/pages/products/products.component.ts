import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../shared/products.service';
import { ProductsModel } from '../../models/products/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  private sub: any;
  public counts = [12, 24, 36];
  public products: Array<ProductsModel> = [];
  // Ngx Pagination Variables
  public page: any;
  public count: any;
  public viewType: any = 'grid';
  public viewCol = 25;
  public loadingReady = false;

  constructor(private activatedRoute: ActivatedRoute, public productsService: ProductsService, private router: Router) { }

  ngOnInit() {
    this.count = this.counts[0];
    this.sub = this.activatedRoute.params.subscribe(params => {
      //console.log(params['name']);
    });

    this.getAllProducts();
  }

  public getAllProducts() {
    this.productsService.getProducts("featured").subscribe(data => {
      this.products = data;
      this.loadingReady = true;
      //for show more product  
      for (let index = 0; index < 3; index++) {
        this.products = this.products.concat(this.products);
      }
    });
  }

  public changeCount(count) {
    this.count = count;
    this.getAllProducts();
  }

  public changeViewType(viewType, viewCol) {
    this.viewType = viewType;
    this.viewCol = viewCol;
  }

  public onPageChanged(event) {
    this.page = event;
    this.getAllProducts();
    window.scrollTo(0, 0);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
