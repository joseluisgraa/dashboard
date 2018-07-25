import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

import { Qualification } from '../models/qualification';
import { QUALIFICATIONS } from '../data/mock-qualifications';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class QualificationService {

  constructor(private messageService: MessageService) { }

  // getQualifications(): Qualification[] {
  //   return QUALIFICATIONS;
  // }

  getQualifications(): Observable<Qualification[]> {
    //return of(QUALIFICATIONS);
    this.messageService.add('QualificationService: fetching qualification details');
    return of(QUALIFICATIONS).pipe(delay(100));
  }

  getQualification(id: number): Observable<Qualification> {
    // TODO: send the message _after_ fetching the qualification
    this.messageService.add(`QualificationService: fetching qualification id=${id}`);
    return of(QUALIFICATIONS.find(qualification => qualification.id === id));
  }

}