import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserrolemasteraddComponent } from './userrolemasteradd.component';

describe('UserrolemasteraddComponent', () => {
  let component: UserrolemasteraddComponent;
  let fixture: ComponentFixture<UserrolemasteraddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserrolemasteraddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserrolemasteraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
