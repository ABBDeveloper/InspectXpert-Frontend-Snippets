import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InspectionSummaryDTO } from '../InspectionSummaryDTO';

@Component({
  selector: 'inspection-card',
  templateUrl: './inspection-card.component.html',
  styleUrls: ['./inspection-card.component.css']
})
export class InspectionCardComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.inspection.thumbnail);
    console.log(this.inspection);
  }

  @Input() inspection!: InspectionSummaryDTO; 

  navigateToInspectionDetails(inspectionId: number) {
    this.router.navigate(['/untersuchnugen', inspectionId]);
  }
}
