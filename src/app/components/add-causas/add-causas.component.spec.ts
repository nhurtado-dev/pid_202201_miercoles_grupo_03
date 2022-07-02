import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCausasComponent } from './add-causas.component';

describe('AddCausasComponent', () => {
  let component: AddCausasComponent;
  let fixture: ComponentFixture<AddCausasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCausasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCausasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
