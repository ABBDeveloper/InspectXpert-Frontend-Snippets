import { InspectionService } from './../inspection.service';
import { CompleteInspectionDialogComponent } from './../complete-inspection-dialog/complete-inspection-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { RoadVehicle } from '../car';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { PhotoService } from '../photo-upload/photo.service';
import { PhotoUploadComponent } from '../photo-upload/photo-upload.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-road-vehicle-optical-inspection',
  templateUrl: './road-vehicle-optical-inspection.component.html',
  styleUrls: ['./road-vehicle-optical-inspection.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ]
})
export class RoadVehicleOpticalInspectionComponent implements OnInit {

  @ViewChild('photoUpload') photoUpload!: PhotoUploadComponent;
  currentYear = new Date().getFullYear();
  startYear = 1900;
  years = Array.from({ length: this.currentYear - this.startYear + 1 }, (_, i) => this.startYear + i);
  qualityGrades = ["O","N","O - -","O -","N - -","N -"];
  roadVehicle= new RoadVehicle;

  constructor(public dialog: MatDialog,
     private inspectionService: InspectionService,
     private router: Router,
      private _formBuilder: FormBuilder,
      ) {
        this.generalInfoFormGroup = this._formBuilder.group({
          generalInfoCtrl111: ['', Validators.required],
          generalInfoCtrl222: ['', Validators.required],
          constructionYear:   ['', Validators.required],
          generalInfoCtrl444: [''],
          generalInfoCtrl555: ['', Validators.required],
          generalInfoCtrl666: ['', Validators.required]
        });  
        }

  generalInfoFormGroup: FormGroup;

  ngOnInit(): void {
   this.generalInfoFormGroup.get("constructionYear").setValue(this.currentYear);
  }

  openDialog() {
    this.inspectionService.openDialog(this.roadVehicle);
  }

  async onSubmit() {
    (await this.inspectionService.saveInspectionDataAndPhotos(this.roadVehicle, this.photoUpload.images)).subscribe(response => {
      console.log(response);
    });

    this.router.navigate(['/alle-untersuchungen']);
  }
}
