import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../form/login/login.component';
import { RegisterComponent } from '../form/register/register.component';
import { AboutComponent } from './content/about/about.component';
import { AttractionsComponent } from './content/attractions/attractions.component';
import { BuyTicketComponent } from './content/buy-ticket/buy-ticket.component';
import { FoodComponent } from './content/food/food.component';
import { HomeComponent } from './content/home/home.component';
import { CustomerComponent } from './customer.component';

const routes: Routes = [
  {
    path: '', component: CustomerComponent, children: ([
      { path: '', component: HomeComponent },
      { path: 'attractions', component: AttractionsComponent },
      { path: 'ticket', component: BuyTicketComponent },
      { path: 'about', component: AboutComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'foods', component: FoodComponent }
    ])
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
