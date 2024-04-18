import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionListItemComponent } from './inspection-list-item.component';

describe('InspectionListItemComponent', () => {
  let component: InspectionListItemComponent;
  let fixture: ComponentFixture<InspectionListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspectionListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
