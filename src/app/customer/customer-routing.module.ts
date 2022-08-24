import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { CustomerComponent } from './customer.component';

const routes: Routes = [
  {path:'', component: CustomerComponent, children:([
    {path:'',component: HomeComponent}
  ])}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
