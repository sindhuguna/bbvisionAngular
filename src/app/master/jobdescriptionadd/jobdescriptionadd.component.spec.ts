import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobdescriptionaddComponent } from './jobdescriptionadd.component';

describe('JobdescriptionaddComponent', () => {
  let component: JobdescriptionaddComponent;
  let fixture: ComponentFixture<JobdescriptionaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobdescriptionaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobdescriptionaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
