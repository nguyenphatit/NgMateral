import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ConfigValue } from './../_helpers/config-value';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class QuestionService {
    constructor(private http: HttpClient, private config: ConfigValue) { }
    getListQuestionByChapterIdPaging(chapterId: number, page: number, size: number): Observable<any> {
        return this.http.get(this.config.url_port + `/question/${chapterId}?page=${page}&size=${size}`).pipe(map((data) => data));
    }
}
