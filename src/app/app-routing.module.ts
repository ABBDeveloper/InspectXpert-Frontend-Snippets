import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InspectionTypeComponent } from './inspection-type/inspection-type.component';
import { RoadVehicleChecklistComponent } from './road-vehicle-checklist/road-vehicle-checklist.component';
import { RoadVehicleOpticalInspectionComponent } from './road-vehicle-optical-inspection/road-vehicle-optical-inspection.component';
import { LoginComponent } from './login/login.component';
import { AllInspectionsComponent } from './all-inspections/all-inspections.component';
import { InspectionDetailsComponent } from './inspection-details/inspection-details.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent , canActivate:[AuthGuard]},
  {path: 'alle-untersuchungen', component: AllInspectionsComponent , canActivate:[AuthGuard]},  
  {path: 'strassenfahrzeug-menu', component: InspectionTypeComponent , canActivate:[AuthGuard]},  
  {path: 'strassenfahrzeug-tehnische-untersuchung/:id', component: RoadVehicleChecklistComponent , canActivate:[AuthGuard]},
  {path: 'strassenfahrzeug-tehnische-untersuchung', component: RoadVehicleChecklistComponent , canActivate:[AuthGuard]},
  {path: 'strassenfahrzeug-optische-untersuchung', component: RoadVehicleOpticalInspectionComponent , canActivate:[AuthGuard]},
  {path: 'untersuchnugen/:id', component: InspectionDetailsComponent, canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
