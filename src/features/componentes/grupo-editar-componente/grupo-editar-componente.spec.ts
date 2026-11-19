import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoEditarComponente } from './grupo-editar-componente';

describe('GrupoEditarComponente', () => {
  let component: GrupoEditarComponente;
  let fixture: ComponentFixture<GrupoEditarComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrupoEditarComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrupoEditarComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
