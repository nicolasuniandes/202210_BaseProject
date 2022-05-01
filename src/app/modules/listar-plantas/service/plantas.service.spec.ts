/* tslint:disable:no-unused-variable */

import { HttpClientModule } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { PlantasService } from './plantas.service';

describe('Service: Plantas', () => {
  let service: PlantasService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PlantasService]
    });
    service = TestBed.inject(PlantasService)
  });

  it('should be created', inject([PlantasService], (service: PlantasService) => {
    expect(service).toBeTruthy();
  }));
});
