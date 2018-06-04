import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigValue } from '../_helpers/config-value';

@Injectable()
export class ExamTestDetailService {

  constructor(private http: HttpClient, private config: ConfigValue) { }
}
