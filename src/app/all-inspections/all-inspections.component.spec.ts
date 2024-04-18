import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInspectionsComponent } from './all-inspections.component';

describe('AllInspectionsComponent', () => {
  let component: AllInspectionsComponent;
  let fixture: ComponentFixture<AllInspectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllInspectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllInspectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
