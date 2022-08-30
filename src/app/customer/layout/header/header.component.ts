import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  check: boolean = false
  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 100) {
        document.querySelector('.header')?.classList.add('bg-header')
      } else {
        document.querySelector('.header')?.classList.remove('bg-header')
      }
    })
    document.querySelector('.nav-mb2')?.addEventListener('click', (e: any) => {
      if (document.querySelector('.nav-mb2')?.contains(e.target)) {
        document.querySelector('.nav-mobile')?.classList.remove("show-nav")
        this.check = false
      }

    })

  }
  shownav() {
    if (this.check) {
      document.querySelector('.nav-mobile')?.classList.remove("show-nav")
      this.check = false
    } else {
      document.querySelector('.nav-mobile')?.classList.add("show-nav")
      this.check = true
    }

  }
}
