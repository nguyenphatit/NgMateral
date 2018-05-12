import { Observable } from 'rxjs/Observable';
import { ConfigValue } from './../_helpers/config-value';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StructureTestDetailService {
    constructor(private http: HttpClient, private config: ConfigValue) {

    }
    getListStrucBySubjectId(subjectId: number): Observable<any> {
        return this.http.get(this.config.url_port + `/struc-test-detail/${subjectId}`).map((data: any) => {
            return data;
        });
    }
}
