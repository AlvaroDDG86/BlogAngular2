/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComunicationService } from './comunication.service';

describe('ComunicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComunicationService]
    });
  });

  it('should ...', inject([ComunicationService], (service: ComunicationService) => {
    expect(service).toBeTruthy();
  }));
});
