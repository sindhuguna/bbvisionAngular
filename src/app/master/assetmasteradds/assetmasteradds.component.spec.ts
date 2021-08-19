import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetmasteraddsComponent } from './assetmasteradds.component';

describe('AssetmasteraddsComponent', () => {
  let component: AssetmasteraddsComponent;
  let fixture: ComponentFixture<AssetmasteraddsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetmasteraddsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetmasteraddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
