import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges, OnDestroy, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit in home works!");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy in home works!");
  }
  ngOnChanges(){
    console.log("ngOnChanges in home works!");
  }
  ngDoCheck(){
    console.log("ngDoCheck in home works!");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit in home works!");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked in home works!");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewtInit in home works!");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked in home works!");
  }

}
