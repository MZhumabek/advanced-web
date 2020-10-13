import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';

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
  constructor() { }

  ngOnInit(){
    this.items=[];
    console.log("ngOnInit in shop works!");
    console.log(this.tref.nativeElement.textContent);
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
    this.items.push("Dog, Price 20$");
    this.sum=this.sum + 20;
    return false;
  };
  addDogFood() {
    this.items.push("Dog Food, Price 4$");
    this.sum=this.sum + 4;
    return false;
  };
  addCat() {
    this.items.push("Cat Food, Price 18$");
    this.sum=this.sum + 18;
    return false;
  };
  addCatFood() {
    this.items.push("Cat Food, Price 5$");
    this.sum=this.sum + 5;
    return false;
  };
   toDate: Date = new Date();
  buy(){
    alert("Success!")
  }
}
