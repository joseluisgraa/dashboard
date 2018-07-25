import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Qualification } from '../../models/qualification';
import { QualificationService } from '../../services/qualification.service';

@Component({
  selector: 'app-qualification-detail',
  templateUrl: './qualification-detail.component.html',
  styleUrls: ['./qualification-detail.component.scss']
})
export class QualificationDetailComponent implements OnInit {

  @Input() qualification: Qualification;

  constructor(
    private route: ActivatedRoute,
    private qualificationService: QualificationService,
    private location: Location) {
  }

  ngOnInit() {
    this.getQualification();
  }

  getQualification(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.qualificationService.getQualification(id)
      .subscribe(qualification => this.qualification = qualification);
  }

  goBack(): void {
    this.location.back();
  }

}
