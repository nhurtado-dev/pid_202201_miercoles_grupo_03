import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaBoletaComponent } from './consulta-boleta.component';

describe('ConsultaBoletaComponent', () => {
  let component: ConsultaBoletaComponent;
  let fixture: ComponentFixture<ConsultaBoletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaBoletaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaBoletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
