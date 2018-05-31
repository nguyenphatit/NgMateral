import { Job } from './../_models/job';
import { ConfigValue } from './../_helpers/config-value';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class JobService {

  constructor(private http: HttpClient, private config: ConfigValue) { }
  addOutLine(job: Job): Observable<any> {
    return this.http.post(this.config.url_port + `/job/add-out-line`, {
      subjectId: job.subjectId,
      teacherId: job.teacherId,
      jobContent: job.jobContent,
      endTime: job.endTime
    });
  }
}
