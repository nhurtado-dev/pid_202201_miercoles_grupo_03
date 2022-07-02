import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConsultaincidenteComponent } from './add-consultaincidente.component';

describe('AddConsultaincidenteComponent', () => {
  let component: AddConsultaincidenteComponent;
  let fixture: ComponentFixture<AddConsultaincidenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConsultaincidenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConsultaincidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
