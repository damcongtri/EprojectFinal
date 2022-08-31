import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.css']
})
export class AttractionsComponent implements OnInit {
  list: any
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getAttraction().subscribe(data => {
      this.list = data
      console.log(data);
    })
  }

}
