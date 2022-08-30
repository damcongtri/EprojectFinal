import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 100) {
        document.querySelector('.header')?.classList.add('bg-header')
      } else {
        document.querySelector('.header')?.classList.remove('bg-header')
      }
    })
  }

}
