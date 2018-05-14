import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'soan-cau-hoi.component.html'
})

export class SoanCauHoiComponent implements OnInit {
  isTL = true;
  isTN = true;
  numAnswer: Number;

  constructor() { }

  ngOnInit() { }

  openTL(): void {
    this.isTL = false;
    this.isTN = true;
  }

  openTN(): void {
    this.isTL = true;
    this.isTN = false;
  }
   numberQuestion(number: number) {
     this.numAnswer = number;
     console.log(number);
   }
}
