import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './content/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DetailComponent } from './content/detail/detail.component';
import { CustomerComponent } from './customer.component';
import { AttractionsComponent } from './content/attractions/attractions.component';
import { BuyTicketComponent } from './content/buy-ticket/buy-ticket.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    DetailComponent,
    CustomerComponent,
    AttractionsComponent,
    BuyTicketComponent
  ],

  imports: [
    CommonModule,
    CustomerRoutingModule,
    CarouselModule   
    
  ]
})
export class CustomerModule { }
