import { Subject } from './../_models/subject';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigValue } from './../_helpers/config-value';
import { HttpClient } from '@angular/common/http';
import { OnInit, Injectable } from '@angular/core';
@Injectable()
export class SubjectService {

    constructor(private http: HttpClient, private config: ConfigValue) {
    }

    getChaptersBySubjectId(subjectId: number, page: number, size: number): Observable<any> {
        return this.http.get(this.config.url_port + `/subject/${subjectId}/chapter?page=${page}&size=${size}`).pipe(map(
            (data: any) => data = data ? data : []
        ));
    }
    getSubjectBySubjectId(subjectId: number): Observable<Subject> {
        return this.http.get(this.config.url_port + `/subject/${subjectId}`).pipe(map((data: any) => data = data ? data : []));
    }

}
