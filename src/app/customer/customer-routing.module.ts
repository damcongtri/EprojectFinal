import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttractionsComponent } from './content/attractions/attractions.component';
import { BuyTicketComponent } from './content/buy-ticket/buy-ticket.component';
import { HomeComponent } from './content/home/home.component';
import { CustomerComponent } from './customer.component';

const routes: Routes = [
  {
    path: '', component: CustomerComponent, children: ([
      { path: '', component: HomeComponent },
      { path: 'attractions', component: AttractionsComponent },
      { path: 'buy-ticket', component: BuyTicketComponent }
    ])
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
