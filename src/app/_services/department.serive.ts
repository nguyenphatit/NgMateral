import { Injectable } from '@angular/core';
import { ConfigValue } from '../_helpers/config-value';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DepartmentService {

  constructor(private http: HttpClient, private config: ConfigValue) { }

  getAllDepartment(): Observable<any> {
    return this.http.get(this.config.url_port + `/department/all-department`).pipe(map(
      (data: any) => data = data ? data : []
    ));
  }
}
