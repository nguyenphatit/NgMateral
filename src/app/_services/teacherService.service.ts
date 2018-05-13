import { ConfigValue } from './../_helpers/config-value';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TeacherService {
    constructor(private http: HttpClient, private config: ConfigValue) {

    }


    getListSubjectOfTeacherEmailFromToken(page: number, size: number): Observable<any> {
        return this.http.get(this.config.url_port + `/teacher/subjects?page=${page}&size=${size}`).pipe(map((data: any) => {
          return data;
      }));
    }
    getListSubjectOfTeacherEmailFromToken2(): Observable<any> {
        return this.http.get(this.config.url_port + `/teacher/subjects`).pipe(map((data: any) => {
          return data;
      }));
    }
    getListDepartmentOfTeacherEmailFromToken(): Observable<any> {
        return this.http.get(this.config.url_port + `/teacher/departments`).pipe(map((data: any) => {
          return data;
      }));
    }
    getTeacherByTeacherIdNoCollection(teacherId: number): Observable<any> {
        return this.http.get(this.config.url_port + `/teacher/${teacherId}`).pipe(map((data: any) => {
          return data;
      }));
    }

}
