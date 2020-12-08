import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  items:string[];
  constructor(private loggingService: LoggingService) { this.items=[];}

  addDog() {
    this.items.push("Dog, Price 20$");
    this.loggingService.log('List of product:' + this.items);
    return this.items;
  };
  addDogFood() {
    this.items.push("Dog Food, Price 4$");
    this.loggingService.log('List of product:' + this.items);
    return this.items;
  };
  addCat() {
    this.items.push("Cat, Price 18$");  
    this.loggingService.log('List of product:' + this.items);
    return this.items;
  };
  addCatFood() {
    this.items.push("Cat Food, Price 5$");
    this.loggingService.log('List of product:' + this.items);
    return this.items;
  };
}
