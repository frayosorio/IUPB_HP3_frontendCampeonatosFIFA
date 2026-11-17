import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadComponente } from './ciudad-componente';

describe('CiudadComponente', () => {
  let component: CiudadComponente;
  let fixture: ComponentFixture<CiudadComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CiudadComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiudadComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
