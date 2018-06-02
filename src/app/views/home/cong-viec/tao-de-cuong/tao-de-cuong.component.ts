import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'tao-de-cuong.component.html'
})

export class TaoDeCuongComponent implements OnInit {
  subjectId: number;
  subject: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.subject = this.route.params.subscribe(params => {
      this.subjectId = +params['subjectId'];
      console.log(this.subjectId);
    });
  }
}
