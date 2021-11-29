import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsComponent } from './payments.component';
import { FacturesComponent } from './factures/factures.component';
const routes: Routes = [{ path: 'factures', component: PaymentsComponent }];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
