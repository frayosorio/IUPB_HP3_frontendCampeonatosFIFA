import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadEditarComponente } from './ciudad-editar-componente';

describe('CiudadEditarComponente', () => {
  let component: CiudadEditarComponente;
  let fixture: ComponentFixture<CiudadEditarComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CiudadEditarComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiudadEditarComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
