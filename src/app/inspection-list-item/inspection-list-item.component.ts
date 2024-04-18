import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InspectionSummaryDTO } from '../InspectionSummaryDTO';

@Component({
  selector: 'inspection-list-item',
  templateUrl: './inspection-list-item.component.html',
  styleUrls: ['./inspection-list-item.component.css']
})
export class InspectionListItemComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
    console.log(this.inspection.thumbnail)
  }

  @Input() inspection!: InspectionSummaryDTO; 

  navigateToInspectionDetails(inspectionId: number) {
    this.router.navigate(['/untersuchnugen', inspectionId]);
  }
}
