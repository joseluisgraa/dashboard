import { Component, OnInit } from '@angular/core';
import { Qualification } from '../../models/qualification';
import { QualificationService } from '../../services/qualification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {

  qualifications: Qualification[] = [];

  constructor(private qualificationService: QualificationService) { }

  ngOnInit() {
    this.getQualifications();
  }

  getQualifications(): void {
    this.qualificationService.getQualifications()
      .subscribe(qualifications => {
        console.log(qualifications);
        this.qualifications = qualifications.slice(0, 4);
        return this.qualifications;
      });
  }
}