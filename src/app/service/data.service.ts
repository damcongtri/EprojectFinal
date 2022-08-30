import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const urlfoods = "assets/data/foods.json"
const urlattractions = "assets/data/attractions.json"
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getFood() {
    return this.http.get(urlfoods)
  }
  getAttraction() {
    return this.http.get(urlattractions)
  }
}
