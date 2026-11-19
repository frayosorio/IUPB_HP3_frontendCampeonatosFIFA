import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoPosicionesComponente } from './grupo-posiciones-componente';

describe('GrupoPosicionesComponente', () => {
  let component: GrupoPosicionesComponente;
  let fixture: ComponentFixture<GrupoPosicionesComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrupoPosicionesComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrupoPosicionesComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
