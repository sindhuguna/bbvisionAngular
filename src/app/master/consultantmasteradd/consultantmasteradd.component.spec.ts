import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantmasteraddComponent } from './consultantmasteradd.component';

describe('ConsultantmasteraddComponent', () => {
  let component: ConsultantmasteraddComponent;
  let fixture: ComponentFixture<ConsultantmasteraddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultantmasteraddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantmasteraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
