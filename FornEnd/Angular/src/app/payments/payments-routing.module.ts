import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsComponent } from './payments.component';
import { FacturesComponent } from './factures/factures.component';
import { FactureDetailsComponent } from './facture-details/facture-details.component';
const routes: Routes = [
  { path: 'factures', component: PaymentsComponent },
  { path: 'facturesDetails/:id', component: FactureDetailsComponent },
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
