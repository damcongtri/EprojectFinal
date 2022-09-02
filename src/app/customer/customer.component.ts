import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
}
