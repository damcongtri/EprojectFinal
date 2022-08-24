import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './content/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DetailComponent } from './content/detail/detail.component';
import { CustomerComponent } from './customer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    DetailComponent,
    CustomerComponent
  ],

  imports: [
    CommonModule,
    CustomerRoutingModule,
    CarouselModule   
    
  ]
})
export class CustomerModule { }
