import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../_models';
@Component({
  templateUrl: 'home.component.html'
})


export class HomeComponent implements OnInit {
  teacher: Teacher[] = [];

  constructor() { }

  ngOnInit() {

  }
}
