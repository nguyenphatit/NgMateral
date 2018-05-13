import { Observable } from 'rxjs';
import { ConfigValue } from './../_helpers/config-value';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class StructureTestDetailService {
    constructor(private http: HttpClient, private config: ConfigValue) {

    }
    getListStrucBySubjectId(subjectId: number): Observable<any> {
        return this.http.get(this.config.url_port + `/struc-test-detail/${subjectId}`).pipe(map((data: any) => {
          return data;
      }));
    }
}
