import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InspectionDTO } from '../inspectionDTO';
import { InspectionService } from '../inspection.service';
import { VehicleInspector } from '../vehicleInspector';

@Component({
  selector: 'app-inspection-details',
  templateUrl: './inspection-details.component.html',
  styleUrls: ['./inspection-details.component.css']
})
export class InspectionDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private inspectionService: InspectionService,
    private router: Router
  ){}

  inspection: InspectionDTO; 
  photos: string[] = [];

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const inspectionId = +params['id']; 
      this.getInspectionDetails(inspectionId);
    })
  }

  getInspectionDetails(inspectionId: number){
    this.inspectionService.getInspectionById(inspectionId).subscribe(inspection => {
      this.inspection = inspection;
      this.photos = this.inspection?.inspectionPhotos || [];
      console.log(this.photos);
    });
  }

  getVehicleStatus() {
    return  VehicleInspector.checkVehicleStatus(this.inspection);
  }

  printReport(arg0: number) {
  throw new Error('Method not implemented.');
  }

  createPdfReport() {
  throw new Error('Method not implemented.');
  }

  editInspection() {
    this.router.navigate(['/strassenfahrzeug-tehnische-untersuchung', this.inspection.id]);
  }

  deleteInspection(inspectionId: number) {
    this.inspectionService.deleteInspectionById(inspectionId).subscribe({
      next: (response) => {
        // Handle response
        console.log('Inspection deleted successfully', response);
      },
      error: (error) => {
        // Handle error
        console.error('There was an error!', error);
      }
    });
    this.router.navigate(['/alle-untersuchungen']);
  }
}