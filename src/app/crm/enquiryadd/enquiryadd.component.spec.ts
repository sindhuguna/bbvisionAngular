import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryaddComponent } from './enquiryadd.component';

describe('EnquiryaddComponent', () => {
  let component: EnquiryaddComponent;
  let fixture: ComponentFixture<EnquiryaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquiryaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquiryaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
