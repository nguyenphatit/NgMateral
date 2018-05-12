import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../_services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { ConfigValue } from '../../../_helpers/config-value';
import { Teacher } from '../../../_models';

@Component({
  templateUrl: 'main.component.html'
})

export class MainComponent implements OnInit {
  currentUser: any;
  public teacher: Teacher;

  constructor(
    private authentication: AuthenticationService,
    private http: HttpClient,
    private config: ConfigValue
  ) { }

  ngOnInit() {
    this.refresh();
  }

  public refresh(): void {
    // this.http.get(this.config.url_port + '/teacher/info').subscribe(
    //   (data: any) => {
    //     // console.log(data);
    //     this.teacher = data;
    //   }
    // );
  }
}
