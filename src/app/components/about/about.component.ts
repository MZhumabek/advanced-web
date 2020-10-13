import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy, OnChanges {

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit in about works!");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy in about works!");
  }
  ngOnChanges(){
    console.log("ngOnChanges in about works!");
  }
  ngDoCheck(){
    console.log("ngDoCheck in about works!");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit in about works!");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked in about works!");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewtInit in about works!");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked in about works!");
  }

}
