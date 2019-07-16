import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

import { Routes, RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store'
import { EffectsModule, Actions } from "@ngrx/effects";

import { customerReducer } from './state/customer.reducer';
import { CustomerEffect } from "./state/customer.effects";

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

const customerRoutes: Routes = [{ path: "", component: CustomerComponent }];

@NgModule({
  declarations: [CustomerComponent, CustomerAddComponent, CustomerEditComponent, CustomerListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes),
    StoreModule.forFeature('customers', customerReducer),
    EffectsModule.forFeature([CustomerEffect]),
    ReactiveFormsModule,
    FormsModule,
    InfiniteScrollModule
  ]
})
export class CustomersModule { }
