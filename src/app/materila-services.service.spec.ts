import { TestBed } from '@angular/core/testing';

import { MaterilaServicesService } from './materila-services.service';

describe('MaterilaServicesService', () => {
  let service: MaterilaServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterilaServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
