import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './content/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CustomerComponent } from './customer.component';
import { AttractionsComponent } from './content/attractions/attractions.component';
import { BuyTicketComponent } from './content/buy-ticket/buy-ticket.component';
import { FoodComponent } from './content/food/food.component';
import { AboutComponent } from './content/about/about.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CustomerComponent,
    AttractionsComponent,
    BuyTicketComponent,
    FoodComponent,
    AboutComponent
  ],

  imports: [
    CommonModule,
    CustomerRoutingModule,
    CarouselModule

  ]
})
export class CustomerModule { }
