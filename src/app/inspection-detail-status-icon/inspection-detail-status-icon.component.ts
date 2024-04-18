import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'inspection-detail-status-icon',
  templateUrl: './inspection-detail-status-icon.component.html',
  styleUrls: ['./inspection-detail-status-icon.component.css']
})
export class InspectionDetailStatusIconComponent{

  @Input() inspectionDetailStatus: string; 

  // Methode zur Auswahl des SVG-Symbols basierend auf dem Wert
  getIcon(): string {
    if (this.inspectionDetailStatus === 'i.O') {
      return 'assets/images/icons/check-svgrepo-com.svg';
    } else if (this.inspectionDetailStatus === 'n.i.O') {
      return 'assets/images/icons/xmark-svgrepo-com.svg';
    } else {
      return 'assets/images/icons/horizontal-rule-svgrepo-com.svg'; 
    }
  }
}