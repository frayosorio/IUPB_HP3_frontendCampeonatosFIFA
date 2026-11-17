import { TestBed } from '@angular/core/testing';

import { CiudadServicio } from './ciudad-servicio';

describe('CiudadServicio', () => {
  let service: CiudadServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CiudadServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
