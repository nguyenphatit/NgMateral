import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigValue } from '../_helpers/config-value';
import { Observable } from 'rxjs';
import { ExamTest } from '../_models/examtest';
import { map } from 'rxjs/operators';

@Injectable()
export class ExamTestService {

  constructor(private http: HttpClient, private config: ConfigValue) { }

  getExamTestById(examTestId: number) {
    return this.http.get(this.config.url_port + `/exam-test/${examTestId}`).pipe(map(
      (data: any) =>  data = data ? data : []
    ));
  }
}
