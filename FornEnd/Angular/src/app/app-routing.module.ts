import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import {PaymentsComponent } from "./payments/payments.component"
  const routes : Routes =[  
    {path :"payments" , component : PaymentsComponent },
  ];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
