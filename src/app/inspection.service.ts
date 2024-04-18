import { RoadVehicle } from './car';
import { RailVehicle } from './railVehicle';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreCollectionGroup } from '@angular/fire/compat/firestore';
import { CompleteInspectionDialogComponent } from './complete-inspection-dialog/complete-inspection-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PhotoService } from './photo-upload/photo.service';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, firstValueFrom, forkJoin, map } from 'rxjs';
import { CarToInspectionDTOMapperService } from './car-to-inspection-dtomapper.service';
import { InspectionDTO } from './inspectionDTO';
import { InspectionSummaryDTO } from './InspectionSummaryDTO';

@Injectable({
  providedIn: 'root'
})
export class InspectionService {
  private baseUrl = 'http://localhost:8080/inspectxpert'; // Backend-Server-URL

  constructor(
    public dialog: MatDialog, 
    private photoService: PhotoService,
    private http: HttpClient,
    private mapper: CarToInspectionDTOMapperService
    ){}

  //Open dialog to complete the current inspection
  openDialog(vehicle:any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data =  vehicle;
    this.dialog.open(CompleteInspectionDialogComponent, dialogConfig); 
  }

  // completeInspection(vehicle: any){
  //   console.log(vehicle);
  //   this.db.collection('roadVehicleInspections').add({...vehicle});
  // }

  completeInspection(data: any): Observable<any> {
    console.log(data);
    const dto = this.mapper.mapRoadVehicleToInspectionDTO(data);
    console.log(dto);
    return this.http.post(`${this.baseUrl}/saveinspection`, dto);
  }

  async saveInspectionDataAndPhotos(inspectionData: RoadVehicle, photoFiles: File[]): Promise<Observable<any>> {
    if(null !== photoFiles){
      const photoUrls = this.photoService.uploadPhotos(photoFiles, 'inspection_photos');
      const inspectionPhotos = await this.getInspectionPhotos(photoUrls);
      inspectionData.inspectionPhotos = inspectionPhotos;
      inspectionData.thumbnail = inspectionPhotos[0];
    }
    const saveDataObservable = this.saveInspection(inspectionData);
    return forkJoin([saveDataObservable]);
  }

  saveInspection( data: any): Observable<any> {
    const inspectionDTO = this.mapper.mapRoadVehicleToInspectionDTO(data); 
    return this.http.post(`${this.baseUrl}/save-inspection`, inspectionDTO, {responseType: 'text'});
  }

  async updateInspectionDataAndPhotos(inspectionId: number, inspectionData: RoadVehicle, photoFiles: File[], deletedPhotos: string[]): Promise<Observable<any>> {
    if(null !== photoFiles){
      const photoUrls = this.photoService.uploadPhotos(photoFiles, 'inspection_photos');
      let inspectionPhotos = await this.getInspectionPhotos(photoUrls);
      if(deletedPhotos.length > 0){
        //fotos aus firestorage löschen
        //fotos die gelöscht sind raus
        console.log(inspectionData.inspectionPhotos);
        console.log(deletedPhotos);
        console.log(inspectionPhotos);
        inspectionPhotos= [...inspectionPhotos, ...inspectionData.inspectionPhotos];
        inspectionPhotos = inspectionPhotos.filter(url => !deletedPhotos.includes(url));
      }
      inspectionData.inspectionPhotos = inspectionPhotos;
      inspectionData.thumbnail = inspectionPhotos[0];
    }
    const saveDataObservable = this.updateInspection(inspectionId, inspectionData);
    return forkJoin([saveDataObservable]);
  }

  updateInspection(inspectionId: number, data: any): Observable<any> {
    const inspectionDTO = this.mapper.mapRoadVehicleToInspectionDTO(data); 
    console.log(inspectionDTO);
    return this.http.put(`${this.baseUrl}/update-inspection/${inspectionId}`, inspectionDTO, {responseType: 'text'});
  }

  async getInspectionPhotos(photoUrls: Observable<string[]>) {
    const urls = await firstValueFrom(photoUrls);
    return urls;
  }

  getAllInspections(): Observable<InspectionSummaryDTO[]> {
    return this.http.get<InspectionSummaryDTO[]>(`${this.baseUrl}/inspections`);
  }

  getInspectionById(inspectionId: number): Observable<InspectionDTO> {
    return this.http.get<InspectionDTO>(`${this.baseUrl}/inspection/${inspectionId}`);
  }

  deleteInspectionById(inspectionId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/inspection/${inspectionId}`);
  }
}