import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StrucTestDetail } from '../../../../_models';
import { StructureTestDetailService } from '../../../../_services/structureTestDetailService.service';
import { NotifyCenterService } from '../../../../_services/notify-center.service';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: 'tao-cau-truc.component.html'
})

export class TaoCauTrucComponent implements OnInit {
  subjectId: number;
  subject: any;
  structureTestDetail: any;
  chapter: any;
  // edit
  estructureTestId;
  echapterId;
  enumberOfQuestion;
  etotalScore;
  eselectedLevel;
  addStructureModel: StrucTestDetail = new StrucTestDetail();
  strucTestId;
  // add

  constructor(
    private route: ActivatedRoute,
    private structureTestDetailService: StructureTestDetailService,
    private notifyCenterService: NotifyCenterService) { }

  ngOnInit() {
    //  this.addStructureModel  = new  StrucTestDetail();
    this.subject = this.route.params.subscribe(params => {
      this.subjectId = +params['subjectId'];
      this.loadData();
    });
  }

  loadData(): void {
    this.structureTestDetailService.getListStrucBySubjectId(this.subjectId).subscribe(data => {
      this.structureTestDetail = data;
      console.log(this.structureTestDetail);
      if (this.structureTestDetail) { this.strucTestId = this.structureTestDetail[0].structureTestId; }

    });
  }

  // form edit
  submitFormEdit(id: number) {
    const std = new StrucTestDetail();
    id = +id;
    const tmp = this.structureTestDetail.find((item) => item.structureTestId === id);
    this.structureTestDetailService.addstructureTestDetail(tmp).subscribe((data: any) => {
      this.notifyCenterService.sendNotifyCenter({ massage: data, status: 200, details: null });
    });
  }

  // form add
  onSubmit(f: NgForm) {
    console.log(f.value);
    this.addStructureModel.structureTestId = this.strucTestId;
    this.addStructureModel.chapterId = f.value.chapterId;
    this.addStructureModel.levelId = f.value.levelId;
    this.addStructureModel.numberOfQuestion = f.value.numberOfQuestion;
    this.addStructureModel.totalScore = f.value.totalScore;
    // console.log(this.addStructureModel);
    this.structureTestDetailService.addstructureTestDetail(this.addStructureModel).subscribe((data: any) => {
      this.notifyCenterService.sendNotifyCenter({ massage: data, status: 200, details: null });
    });
  }
}
