import { Component, OnInit } from '@angular/core';
import { InspectionService } from '../inspection.service';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { InspectionSummaryDTO } from '../InspectionSummaryDTO';

@Component({
  selector: 'app-all-inspections',
  templateUrl: './all-inspections.component.html',
  styleUrls: ['./all-inspections.component.css']
})
export class AllInspectionsComponent implements OnInit {
  inspections$ : Observable<InspectionSummaryDTO[]>;
  filteredInspections$: Observable<InspectionSummaryDTO[]>;

  searchOptions = [
    {value: 'manufacturer', name:'Marke'},
    {value: 'model', name:'Modell'},
    {value: 'licensePlate', name:'Kennzeichen'},
    {value: 'chassisNumber', name:'Fahrgestell Nr.'}
  ];

  selectedSearchField: string = 'manufacturer';
  searchTerm: string = '';
  private selectedFieldSubject = new BehaviorSubject<string>(this.selectedSearchField);
  private searchTerms = new BehaviorSubject<string>(this.searchTerm);
  gridMode: boolean =  true;

  constructor(private inspectionService: InspectionService) { }

  activateGridMode(){
    this.gridMode  = true;
  }

  activateListMode(){
    this.gridMode  = false;
  }
    
  ngOnInit(): void {
    this.inspections$ = this.inspectionService.getAllInspections();
    
    this.filteredInspections$ = combineLatest([
      this.inspections$,
      this.selectedFieldSubject,
      this.searchTerms
    ]).pipe(
      map(([inspections, selectedField, searchTerm]) =>
        inspections.filter(inspection =>
          inspection[selectedField]?.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
    this.search();
 }

  onFieldChange(newField: string): void {
    this.selectedFieldSubject.next(newField);
  }

  search(): void {
    this.searchTerms.next(this.searchTerm);
  }
}