import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadVehicleOpticalInspectionComponent } from './road-vehicle-optical-inspection.component';

describe('RoadVehicleOpticalInspectionComponent', () => {
  let component: RoadVehicleOpticalInspectionComponent;
  let fixture: ComponentFixture<RoadVehicleOpticalInspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadVehicleOpticalInspectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadVehicleOpticalInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
