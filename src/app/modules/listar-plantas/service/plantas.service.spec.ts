/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlantasService } from './plantas.service';

describe('Service: Plantas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlantasService]
    });
  });

  it('should ...', inject([PlantasService], (service: PlantasService) => {
    expect(service).toBeTruthy();
  }));
});
