import { Component, OnInit } from '@angular/core';
import { Qualification } from '../../models/qualification';
import { QUALIFICATIONS } from '../../data/mock-qualifications';
import { QualificationService } from '../../services/qualification.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.scss']
})
export class QualificationsComponent implements OnInit {

  qualifications: Qualification[];

  selectedQualification: Qualification;


  constructor(
    private qualificationServive: QualificationService,
    private messageService: MessageService
  ) {

  }

  ngOnInit() {
    this.getQualifications();
  }

  onSelect(qualification: Qualification): void {
    this.selectedQualification = qualification;
  }

  // getQualifications(): void {
  //   this.qualifications = this.qualificationServive.getQualifications();
  // };

  getQualifications(): void {
    this.qualificationServive.getQualifications()
        .subscribe(qualifications => {
          this.messageService.add('QualificationComponent: fetched qualification details');
          return this.qualifications = qualifications
        });
  }

}
