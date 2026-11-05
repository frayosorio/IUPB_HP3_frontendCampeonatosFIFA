import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionEditarComponente } from './seleccion-editar-componente';

describe('SeleccionEditarComponente', () => {
  let component: SeleccionEditarComponente;
  let fixture: ComponentFixture<SeleccionEditarComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeleccionEditarComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionEditarComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
