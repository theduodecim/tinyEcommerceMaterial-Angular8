import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './pages/products/products.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ControlsComponent } from './shared/controls/controls.component';
import { ProductComponent } from './pages/products/product/product.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ControlsComponent,
    ProductComponent,
    CartComponent,
    HomeComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    NgxPaginationModule,
    SwiperModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
