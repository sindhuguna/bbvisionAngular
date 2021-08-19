import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantmasterComponent } from './consultantmaster.component';

describe('ConsultantmasterComponent', () => {
  let component: ConsultantmasterComponent;
  let fixture: ComponentFixture<ConsultantmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultantmasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
