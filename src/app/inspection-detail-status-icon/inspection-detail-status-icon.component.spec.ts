import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionDetailStatusIconComponent } from './inspection-detail-status-icon.component';

describe('InspectionDetailStatusIconComponent', () => {
  let component: InspectionDetailStatusIconComponent;
  let fixture: ComponentFixture<InspectionDetailStatusIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspectionDetailStatusIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionDetailStatusIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
