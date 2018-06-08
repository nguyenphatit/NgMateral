import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ConfigValue } from './../_helpers/config-value';

@Injectable()
export class TeacherService {

    constructor(private http: HttpClient, private config: ConfigValue) {

    }

    getAllTeacher(): Observable<any> {
      return this.http.get(this.config.url_port + `/teacher/all-teacher`).pipe(map(
        (data: any) => data = data ? data : []
      ));
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
        return this.http.get(this.config.url_port + `/teacher/departments`).pipe(catchError(e => {
            // noti .setNOttt
            return of([]);

        }));
    }
    getTeacherByTeacherIdNoCollection(teacherId: number): Observable<any> {
        return this.http.get(this.config.url_port + `/teacher/${teacherId}`).pipe(map((data: any) => {
            return data;
        }));
    }
    getJobsOfTeacherPaging(page: Number, size: Number): Observable<any> {
        return this.http.get(this.config.url_port + `/teacher/jobs`).pipe(map((data: any) => {
            return data;
        }));
    }
    getSubjectOfTeacher(): Observable<any> {
        return this.http.get(this.config.url_port + `/subject/of-teacher`).pipe(map((data: any) => data ? data : []));
    }

}
