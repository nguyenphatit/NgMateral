import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotifyCenterService } from '../../../../_services/notify-center.service';
import { SubjectService } from '../../../../_services/subjectService.service';
import { NgForm } from '@angular/forms';
import { Chapter } from '../../../../_models';

@Component({
  templateUrl: 'tao-de-cuong.component.html'
})

export class TaoDeCuongComponent implements OnInit {
  subjectId: number;
  subject: any;
  chapters: any;
  panelOpenState = false;
  addChapterModel: Chapter = new Chapter();

  constructor(
    private route: ActivatedRoute,
    private notifyCenterService: NotifyCenterService,
    private subjectService: SubjectService
  ) { }

  ngOnInit() {
    this.subject = this.route.params.subscribe(params => {
      this.subjectId = +params['subjectId'];
      this.loadData();
    });
  }

  loadData() {
    this.subjectService.getListChapterBySubjectId(this.subjectId).subscribe(data => {
      this.chapters = data;
    });
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    this.addChapterModel.chapterName = f.value.chapterName;
    this.addChapterModel.describe = f.value.describe;
    this.addChapterModel.subjectId = this.subjectId;
    this.subjectService.createChapter(this.addChapterModel).subscribe((data: any) => {
      this.notifyCenterService.sendNotifyCenter({ massage: data, status: 200, details: null });
    });
    location.reload();
  }
}
