import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  items:string[];
  firstname:string;
  lastname:string;
  constructor() { }

  ngOnInit(){
    this.items=[];
    console.log("ngOnInit in contact works!");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy in contact works!");
  }
  ngOnChanges(){
    console.log("ngOnChanges in contact works!");
  }
  ngDoCheck(){
    console.log("ngDoCheck in contact works!");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit in contact works!");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked in contact works!");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewtInit in contact works!");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked in contact works!");
  }
  addItem(item) {
    this.items.push(item);
    return false;
  };
}
