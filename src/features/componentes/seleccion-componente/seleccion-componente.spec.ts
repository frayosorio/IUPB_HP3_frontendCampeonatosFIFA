import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionComponente } from './seleccion-componente';

describe('SeleccionComponente', () => {
  let component: SeleccionComponente;
  let fixture: ComponentFixture<SeleccionComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeleccionComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
