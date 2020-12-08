import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit, OnChanges, OnDestroy, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
  items:string[];
  sum:number = 0;
  show=false;
  @ViewChild("myDiv", {read: ElementRef}) tref: ElementRef;
  constructor(private productService: ProductService) { }

  ngOnInit(){
    this.items=[];
    console.log("ngOnInit in shop works!");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy in shop works!");
  }
  ngOnChanges(){
    console.log("ngOnChanges in shop works!");
  }
  ngDoCheck(){
    console.log("ngDoCheck in shop works!");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit in shop works!");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked in shop works!");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewtInit in shop works!");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked in shop works!");
  }
  addDog() {
    this.items=this.productService.addDog();
    this.sum=this.sum + 20;
    return false;
  };
  addDogFood() {
    this.items=this.productService.addDogFood();
    this.sum=this.sum + 4;
    return false;
  };
  addCat() {
    this.items=this.productService.addCat();
    this.sum=this.sum + 18;
    return false;
  };
  addCatFood() {
    this.items=this.productService.addCatFood();
    this.sum=this.sum + 5;
    return false;
  };
   toDate: Date = new Date();
  buy(){
    alert("Success!")
  }
}
