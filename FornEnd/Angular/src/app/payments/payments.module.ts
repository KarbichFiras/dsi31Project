import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsComponent } from './payments.component';
import { FacturesComponent } from './factures/factures.component';
import { FactureDetailsComponent } from './facture-details/facture-details.component';


@NgModule({
  declarations: [
    PaymentsComponent,
    FacturesComponent,
    FactureDetailsComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
