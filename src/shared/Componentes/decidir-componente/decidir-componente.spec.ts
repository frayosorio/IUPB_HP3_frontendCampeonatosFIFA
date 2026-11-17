import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecidirComponente } from './decidir-componente';

describe('DecidirComponente', () => {
  let component: DecidirComponente;
  let fixture: ComponentFixture<DecidirComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecidirComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecidirComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
