import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Input} from '@angular/core';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy, OnChanges, DoCheck, 
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input() items:string[];
  @Input() sum:number;
  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit in order works!");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy in order works!");
  }
  ngOnChanges(){
    console.log("ngOnChanges in oreder works!");
  }
  ngDoCheck(){
    console.log("ngDoCheck in order works!");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit in order works!");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked in order works!");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewtInit in order works!");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked in order works!");
  }
}
