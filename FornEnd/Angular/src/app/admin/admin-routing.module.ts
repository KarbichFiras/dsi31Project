import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'allusers', component: UserComponent },
  { path: 'detailuser/:id', component: UserDetailsComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
