import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store'
import { Observable } from "rxjs";

import * as customerActions from "../state/customer.actions";
import * as fromCustomer from "../state/customer.reducer";
import { Customer } from "../customer.model";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html'
})
export class CustomerListComponent implements OnInit {

  scrollDistance = 2;

  onScrollDown () {
    console.log('scrolled down!!');
  }

  customers$: Observable<Customer[]>;
  error$: Observable<String>;

  constructor(private store: Store<fromCustomer.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new customerActions.LoadCustomers());
    // this.store.subscribe(state => (this.customers = state.customers.customers));
    this.customers$ = this.store.pipe(select(fromCustomer.getCustomers));
    this.error$ = this.store.pipe(select(fromCustomer.getError));
  }

  deleteCustomer(customer: Customer) {
    this.store.dispatch(new customerActions.DeleteCustomer(customer.id));
  }

  editCustomer(customer: Customer) {
    this.store.dispatch(new customerActions.LoadCustomer(customer.id));
  }

}
