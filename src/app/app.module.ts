import { AuthService } from './auth/auth.service';
import { CompleteInspectionDialogComponent } from './complete-inspection-dialog/complete-inspection-dialog.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule} from '@angular/material/stepper'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field'; 
import { MatInputModule} from '@angular/material/input'; 
import { MatRadioModule} from '@angular/material/radio'; 
import { MatCardModule} from '@angular/material/card'; 
import { MatButtonModule} from '@angular/material/button'; 
import { MatTableModule} from '@angular/material/table';
import { MatSelectModule} from '@angular/material/select';  
import { MatToolbarModule} from '@angular/material/toolbar'; 
import { MatGridListModule} from '@angular/material/grid-list'; 
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { AllInspectionsComponent } from './all-inspections/all-inspections.component'
import { VehicleSelectionComponent } from './vehicle-selection/vehicle-selection.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RoadVehicleChecklistComponent } from './road-vehicle-checklist/road-vehicle-checklist.component';
import { InspectionTypeComponent } from './inspection-type/inspection-type.component';
import { RoadVehicleOpticalInspectionComponent } from './road-vehicle-optical-inspection/road-vehicle-optical-inspection.component';
import { LoginComponent } from './login/login.component';
import { MatDialogModule} from '@angular/material/dialog';
import { LogoutDialogComponent } from './logout-dialog/logout-dialog.component';
import { InspectionCompletedInfoSnackbarComponent } from './inspection-completed-info-snackbar/inspection-completed-info-snackbar.component'; 
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { PhotoUploadComponent } from './photo-upload/photo-upload.component'; 
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import {  AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HttpClientModule } from '@angular/common/http';
import { InspectionCardComponent } from './inspection-card/inspection-card.component';
import { InspectionDetailsComponent } from './inspection-details/inspection-details.component';
import { PhotoCarouselComponent } from './photo-carousel/photo-carousel.component';
import { InspectionDetailStatusIconComponent } from './inspection-detail-status-icon/inspection-detail-status-icon.component';
import { InspectionListItemComponent } from './inspection-list-item/inspection-list-item.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    ChecklistComponent,
    HomeComponent,
    VehicleSelectionComponent,
    ToolbarComponent,
    RoadVehicleChecklistComponent,
    InspectionTypeComponent,
    RoadVehicleOpticalInspectionComponent,
    LoginComponent,
    CompleteInspectionDialogComponent,
    LogoutDialogComponent,
    InspectionCompletedInfoSnackbarComponent,
    PhotoUploadComponent,
    AllInspectionsComponent,
    InspectionCardComponent,
    InspectionDetailsComponent,
    PhotoCarouselComponent,
    InspectionDetailStatusIconComponent,
    InspectionListItemComponent,
    BackButtonComponent,
    ActionBarComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    FormsModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [CompleteInspectionDialogComponent]
})
export class AppModule { }