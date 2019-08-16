import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material';
import { ProductsService } from 'src/app/shared/products.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @ViewChild('horizontalStepper', null) horizontalStepper: MatStepper;
  @ViewChild('verticalStepper', null) verticalStepper: MatStepper;
  billingForm: FormGroup;
  deliveryForm: FormGroup;
  paymentForm: FormGroup;
  countries = [];
  months = [];
  years = [];
  deliveryMethods = [];

  constructor(public productsService: ProductsService, public formBuilder: FormBuilder) { }

  ngOnInit() {
    // Geting the data form Select options from the service
    this.countries = this.productsService.getCountries();
    this.months = this.productsService.getMonths();
    this.years = this.productsService.getYears();
    this.deliveryMethods = this.productsService.getDeliveryMethods();
    // Initializing and Required Validation of the forms
    this.billingForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: '',
      company: '',
      email: ['', Validators.required],
      phone: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      state: '',
      zip: ['', Validators.required],
      address: ['', Validators.required]
    });
    this.deliveryForm = this.formBuilder.group({
      deliveryMethod: [this.deliveryMethods[0], Validators.required]
    });
    this.paymentForm = this.formBuilder.group({
      cardHolderName: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expiredMonth: ['', Validators.required],
      expiredYear: ['', Validators.required],
      cvv: ['', Validators.required]
    });
  }
  public placeOrder() {
    this.horizontalStepper._steps.forEach(step => step.editable = false);
    this.verticalStepper._steps.forEach(step => step.editable = false);
    // tslint:disable-next-line:prefer-const
    for (let product of this.productsService.Data.cartList) {
      console.log(product);
    }
    console.log(this.billingForm.value);
    console.log(this.deliveryForm.value);
    console.log(this.productsService.totalPrice);
    this.productsService.Data.cartList.length = 0;
    this.billingForm.reset(this.billingForm.value);
    this.deliveryForm.reset(this.deliveryForm.value);
    this.paymentForm.reset(this.paymentForm.value.reset);
  }

}
