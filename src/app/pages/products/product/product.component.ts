import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../shared/products.service';
import { ProductsModel } from '../../../models/products/products.model';
import { SwiperDirective, SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: []
})
export class ProductComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('zoomViewer', null) zoomViewer;
  @ViewChild(SwiperDirective, null) directiveRef: SwiperDirective;
  public product: ProductsModel;
  public image: any;
  public zoomImage: any;
  private sub: any;
  public relatedProducts: Array<ProductsModel>;
  public config: SwiperConfigInterface = {};
  public loadingReady = false;
  constructor(public productsService: ProductsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.sub = this.activatedRoute.params.subscribe(params => {
      this.getProductById(params[`id`]);
    });
    this.getRelatedProducts();
    console.log(this.zoomViewer);
    console.log(this.product);
  }
  ngAfterViewInit() {
    this.config = {
      observer: false,
      slidesPerView: 4,
      spaceBetween: 10,
      keyboard: true,
      navigation: true,
      pagination: false,
      loop: false,
      preloadImages: false,
      lazy: true,
      breakpoints: {
        480: {
          slidesPerView: 2
        },
        600: {
          slidesPerView: 3,
        }
      }
    };
  }
  public getProductById(id) {
    this.productsService.getProductById(id).subscribe(data => {
      this.product = data;
      console.log(data);
      this.loadingReady = true;
      this.image = data.images[0].medium;
      this.zoomImage = data.images[0].big;
    });
  }

  public getRelatedProducts() {
    this.productsService.getProducts('related').subscribe(data => {
      this.relatedProducts = data;
    });
  }

  public selectImage(image) {
    this.image = image.medium;
    this.zoomImage = image.big;
  }

  public onMouseMove(e) {
    if (window.innerWidth >= 1280) {
      let image;
      let offsetX;
      let offsetY;
      let x;
      let y;
      let zoomer;
      image = e.currentTarget;
      offsetX = e.offsetX;
      offsetY = e.offsetY;
      x = offsetX / image.offsetWidth * 100;
      y = offsetY / image.offsetHeight * 100;
      zoomer = this.zoomViewer.nativeElement.children[0];
      console.log(zoomer);
      if (zoomer) {
        zoomer.style.backgroundPosition = x + '% ' + y + '%';
        zoomer.style.display = "block";
        zoomer.style.height = image.height + 'px';
        zoomer.style.width = image.width + 'px';
      }
    }
  }
  public onMouseLeave(event) {
    this.zoomViewer.nativeElement.children[0].style.display = "none";
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
