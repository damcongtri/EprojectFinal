import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  list: any
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getFood().subscribe(data => {
      this.list = data
    })
  }

}
