import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-child1-demo',
  imports: [],
  templateUrl: './child1-demo.html',
  styleUrl: './child1-demo.css',
  inputs:['a','b','NewArr'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class Child1Demo {
  a:any;
  b:any;
  NewArr:any;

  @ViewChild('#myBox1') myBox1:any;

myName : string;

  constructor(private ele: ElementRef,private cdr:ChangeDetectorRef) {
    console.log('child constructor');
    this.myName='sahil';
    console.log(this.myBox1)
    
  }
  // ngOnInit() {
  //   console.log('child ngOnInit');
  // // }
  // ngOnChanges() {
  //   console.log('child ngOnChanges');
  // }
  // ngDoCheck() {
  //   console.log('child ngDoCheck');
  //   this.cdr.markForCheck()
  // }
  // ngAfterContentInit() {
  //   console.log('child ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('child ngAfterContentChecked')
  // }

  ngAfterViewInit() {
    console.log('child ngAfterViewInit');
  console.log(this.myBox1)
    
  }
  ngAfterViewChecked() {
    console.log('child ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('child ngOnDestory');
  }

}
