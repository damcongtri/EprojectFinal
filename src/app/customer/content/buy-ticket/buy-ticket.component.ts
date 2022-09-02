import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css']
})
export class BuyTicketComponent implements OnInit {
  scroll: number = 0
  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 200) {
        document.getElementById('scroll1')?.classList.add('scroll-show')
        document.getElementById('scroll2')?.classList.add('scroll-show')
        document.getElementById('scroll3')?.classList.add('scroll-show')
      }
    })

  }
  clickBooking() {
    document.querySelector('.bg-ticket')?.scrollIntoView()
  }

}
