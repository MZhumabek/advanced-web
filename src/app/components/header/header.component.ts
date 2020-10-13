import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit in header works!");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy in header works!");
  }
  ngOnChanges(){
    console.log("ngOnChanges in header works!");
  }
  ngDoCheck(){
    console.log("ngDoCheck in header works!");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit in header works!");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked in header works!");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewtInit in header works!");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked in header works!");
  }
}
