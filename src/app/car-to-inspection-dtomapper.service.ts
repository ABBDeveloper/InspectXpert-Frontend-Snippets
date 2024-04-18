import { Injectable } from '@angular/core';
import { InspectionDTO } from './inspectionDTO';
import { RoadVehicle } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarToInspectionDTOMapperService {

  constructor() { }

//   mapRoadVehicleToInspectionDTO(roadVehicle: RoadVehicle): InspectionDTO {

//     const inspectionDTO = new InspectionDTO();

//     inspectionDTO.manufacturer = roadVehicle.manufacturer.toString();
//     inspectionDTO.model = roadVehicle.model.toString();
//     inspectionDTO.construction_year =roadVehicle.constructionYear;
//     inspectionDTO.license_plate = roadVehicle.licensePlate.toString();
//     inspectionDTO.chassis_number = roadVehicle.chassisNumber.toString();
//     inspectionDTO.mileage = roadVehicle.mileage;
//     inspectionDTO.thumbnail = roadVehicle.thumbnail;
//     inspectionDTO.inspectionPhotos = roadVehicle.inspectionPhotos;

//     inspectionDTO.selektive_katalytische_reduktion_scr = roadVehicle.motor.list[0].value.toString();
//     inspectionDTO.motor_ol = roadVehicle.motor.list[1].value.toString();
//     inspectionDTO.olfilter = roadVehicle.motor.list[2].value.toString();
//     inspectionDTO.kuhlsystem = roadVehicle.motor.list[3].value.toString();
//     inspectionDTO.kraftstofffilter = roadVehicle.motor.list[4].value.toString();
//     inspectionDTO.luftfilter = roadVehicle.motor.list[5].value.toString();

//     inspectionDTO.getriebe = roadVehicle.getriebe.list[0].value.toString();
//     inspectionDTO.achsmanschetten = roadVehicle.getriebe.list[1].value.toString();
//     inspectionDTO.gelenkwelle = roadVehicle.getriebe.list[2].value.toString();

//     inspectionDTO.lenkungseinheit = roadVehicle.lenkung.list[0].value.toString();

//     inspectionDTO.bremsanlage = roadVehicle.bremsen.list[0].value.toString();
//     inspectionDTO.bremswirkung = roadVehicle.bremsen.list[1].value.toString();
//     inspectionDTO.bremsstarke = roadVehicle.bremsen.list[2].value.toString();
//     inspectionDTO.bcheibenbremsen = roadVehicle.bremsen.list[3].value.toString();
//     inspectionDTO.beitungen = roadVehicle.bremsen.list[4].value.toString();
//     inspectionDTO.schlauche_und_anschlusse = roadVehicle.bremsen.list[5].value.toString();

//     inspectionDTO.profiltiefe_und_verschleissmuster = roadVehicle.aufhaengung_reader_bereifung.list[0].value.toString();
//     inspectionDTO.aufhangung = roadVehicle.aufhaengung_reader_bereifung.list[1].value.toString();
//     inspectionDTO.stossdampfer = roadVehicle.aufhaengung_reader_bereifung.list[2].value.toString();
//     inspectionDTO.kugelgelenke = roadVehicle.aufhaengung_reader_bereifung.list[3].value.toString();
//     inspectionDTO.reifendruck = roadVehicle.aufhaengung_reader_bereifung.list[4].value.toString();

//     inspectionDTO.anlasser = roadVehicle.elektrische_anlage.list[0].value.toString();
//     inspectionDTO.aussenleuchten = roadVehicle.elektrische_anlage.list[1].value.toString();
//     inspectionDTO.scheinwerfen_ausrichtung = roadVehicle.elektrische_anlage.list[2].value.toString();
//     inspectionDTO.kofferraumbeleuchtung = roadVehicle.elektrische_anlage.list[3].value.toString();
//     inspectionDTO.hupe = roadVehicle.elektrische_anlage.list[4].value.toString();

//     inspectionDTO.kombifilter = roadVehicle.innenraum.list[2].value.toString();

//     inspectionDTO.windschutzscheibe = roadVehicle.aussenseite.list[0].value.toString();
//     inspectionDTO.wischer_und_waschanlage = roadVehicle.aussenseite.list[1].value.toString();
//     inspectionDTO.wischblatter = roadVehicle.aussenseite.list[2].value.toString();
//     inspectionDTO.fahrzeugboden = roadVehicle.aussenseite.list[3].value.toString();

//     inspectionDTO.stossstange_vorne = roadVehicle.opticalCheckpoints[0].value.toString();
//     inspectionDTO.motorhaube = roadVehicle.opticalCheckpoints[1].value.toString();
//     inspectionDTO.linker_kotflugel_vorne = roadVehicle.opticalCheckpoints[2].value.toString();
//     inspectionDTO.rechter_kotflugel_vorne = roadVehicle.opticalCheckpoints[3].value.toString();
//     inspectionDTO.linke_tuer_vorne = roadVehicle.opticalCheckpoints[4].value.toString();
//     inspectionDTO.rechte_tuer_vorne = roadVehicle.opticalCheckpoints[5].value.toString();
//     inspectionDTO.dach = roadVehicle.opticalCheckpoints[6].value.toString();
//     inspectionDTO.linke_tuer_hinten = roadVehicle.opticalCheckpoints[7].value.toString();
//     inspectionDTO.rechte_tuer_hinten = roadVehicle.opticalCheckpoints[8].value.toString();
//     inspectionDTO.linker_kotflugel_hinten = roadVehicle.opticalCheckpoints[9].value.toString();
//     inspectionDTO.rechter_kotflugel_hinten = roadVehicle.opticalCheckpoints[10].value.toString();
//     inspectionDTO.heckklappe = roadVehicle.opticalCheckpoints[11].value.toString();
//     inspectionDTO.stossstange_hinten = roadVehicle.opticalCheckpoints[12].value.toString();


//     return inspectionDTO;
// }

//  mapInspectionDTOToRoadVehicle(inspectionDTO: InspectionDTO): RoadVehicle {
    
//     const roadVehicle = new RoadVehicle();

//     roadVehicle.manufacturer = inspectionDTO.manufacturer.toString();
//     roadVehicle.model = inspectionDTO.model.toString();
//     roadVehicle.constructionYear = inspectionDTO.construction_year;
//     roadVehicle.licensePlate = inspectionDTO.license_plate.toString();
//     roadVehicle.chassisNumber = inspectionDTO.chassis_number.toString();
//     roadVehicle.mileage = inspectionDTO.mileage;
//     roadVehicle.thumbnail = inspectionDTO.thumbnail;
//     roadVehicle.inspectionPhotos = inspectionDTO.inspectionPhotos;

//     roadVehicle.motor.list[0].value = inspectionDTO.selektive_katalytische_reduktion_scr.toString();
//     roadVehicle.motor.list[1].value = inspectionDTO.motor_ol.toString();
//     roadVehicle.motor.list[2].value = inspectionDTO.olfilter.toString();
//     roadVehicle.motor.list[3].value = inspectionDTO.kuhlsystem.toString();
//     roadVehicle.motor.list[4].value = inspectionDTO.kraftstofffilter.toString();
//     roadVehicle.motor.list[5].value = inspectionDTO.luftfilter.toString();

//     roadVehicle.getriebe.list[0].value = inspectionDTO.getriebe.toString();
//     roadVehicle.getriebe.list[1].value = inspectionDTO.achsmanschetten.toString();
//     roadVehicle.getriebe.list[2].value = inspectionDTO.gelenkwelle.toString();

//     roadVehicle.lenkung.list[0].value = inspectionDTO.lenkungseinheit.toString();

//     roadVehicle.bremsen.list[1].value = inspectionDTO.bremsanlage.toString();
//     roadVehicle.bremsen.list[2].value = inspectionDTO.bremswirkung.toString();
//     roadVehicle.bremsen.list[3].value = inspectionDTO.bremsstarke.toString();
//     roadVehicle.bremsen.list[4].value = inspectionDTO.bcheibenbremsen.toString();
//     roadVehicle.bremsen.list[5].value = inspectionDTO.beitungen.toString();
//     roadVehicle.bremsen.list[6].value = inspectionDTO.schlauche_und_anschlusse.toString();

//     roadVehicle.aufhaengung_reader_bereifung.list[0].value = inspectionDTO.profiltiefe_und_verschleissmuster.toString();
//     roadVehicle.aufhaengung_reader_bereifung.list[1].value = inspectionDTO.aufhangung.toString();
//     roadVehicle.aufhaengung_reader_bereifung.list[2].value = inspectionDTO.stossdampfer.toString();
//     roadVehicle.aufhaengung_reader_bereifung.list[3].value = inspectionDTO.kugelgelenke.toString();
//     roadVehicle.aufhaengung_reader_bereifung.list[4].value = inspectionDTO.reifendruck.toString();

//     roadVehicle.elektrische_anlage.list[0].value = inspectionDTO.anlasser.toString();
//     roadVehicle.elektrische_anlage.list[1].value = inspectionDTO.aussenleuchten.toString();
//     roadVehicle.elektrische_anlage.list[2].value = inspectionDTO.scheinwerfen_ausrichtung.toString();
//     roadVehicle.elektrische_anlage.list[3].value = inspectionDTO.kofferraumbeleuchtung.toString();
//     roadVehicle.elektrische_anlage.list[4].value = inspectionDTO.hupe.toString();

//     roadVehicle.innenraum.list[2].value = inspectionDTO.kombifilter.toString();

//     roadVehicle.aussenseite.list[0].value = inspectionDTO.windschutzscheibe.toString();
//     roadVehicle.aussenseite.list[1].value = inspectionDTO.wischer_und_waschanlage.toString();
//     roadVehicle.aussenseite.list[2].value = inspectionDTO.wischblatter.toString();
//     roadVehicle.aussenseite.list[3].value = inspectionDTO.fahrzeugboden.toString();

//     roadVehicle.opticalCheckpoints[0].value = inspectionDTO.stossstange_vorne.toString();
//     roadVehicle.opticalCheckpoints[1].value = inspectionDTO.motorhaube.toString();
//     roadVehicle.opticalCheckpoints[2].value = inspectionDTO.linker_kotflugel_vorne.toString();
//     roadVehicle.opticalCheckpoints[3].value = inspectionDTO.rechter_kotflugel_vorne.toString();
//     roadVehicle.opticalCheckpoints[4].value = inspectionDTO.linke_tuer_vorne.toString();
//     roadVehicle.opticalCheckpoints[5].value = inspectionDTO.rechte_tuer_vorne.toString();
//     roadVehicle.opticalCheckpoints[6].value = inspectionDTO.dach.toString();
//     roadVehicle.opticalCheckpoints[7].value = inspectionDTO.linke_tuer_hinten.toString();
//     roadVehicle.opticalCheckpoints[8].value = inspectionDTO.rechte_tuer_hinten.toString();
//     roadVehicle.opticalCheckpoints[9].value = inspectionDTO.linker_kotflugel_hinten.toString();
//     roadVehicle.opticalCheckpoints[10].value = inspectionDTO.rechter_kotflugel_hinten.toString();
//     roadVehicle.opticalCheckpoints[11].value = inspectionDTO.heckklappe.toString();
//     roadVehicle.opticalCheckpoints[12].value = inspectionDTO.stossstange_hinten.toString();

//     return roadVehicle;
// }


mapRoadVehicleToInspectionDTO(roadVehicle: RoadVehicle): InspectionDTO {
  const inspectionDTO = new InspectionDTO();

  inspectionDTO.manufacturer = roadVehicle.manufacturer?.toString() || '';
  inspectionDTO.model = roadVehicle.model?.toString() || '';
  inspectionDTO.construction_year = roadVehicle.constructionYear || 0;
  inspectionDTO.license_plate = roadVehicle.licensePlate?.toString() || '';
  inspectionDTO.chassis_number = roadVehicle.chassisNumber?.toString() || '';
  inspectionDTO.mileage = roadVehicle.mileage || 0;
  inspectionDTO.thumbnail = roadVehicle.thumbnail;
  inspectionDTO.inspectionPhotos = roadVehicle.inspectionPhotos;

  // Motor spezifische Felder
  inspectionDTO.selektive_katalytische_reduktion_scr = this.getValueSafely(roadVehicle.motor.list, 0);
  inspectionDTO.motor_ol = this.getValueSafely(roadVehicle.motor.list, 1);
  inspectionDTO.olfilter = this.getValueSafely(roadVehicle.motor.list, 2);
  inspectionDTO.kuhlsystem = this.getValueSafely(roadVehicle.motor.list, 3);
  inspectionDTO.kraftstofffilter = this.getValueSafely(roadVehicle.motor.list, 4);
  inspectionDTO.luftfilter = this.getValueSafely(roadVehicle.motor.list, 5);

  // Getriebe spezifische Felder
  inspectionDTO.getriebe = this.getValueSafely(roadVehicle.getriebe.list, 0);
  inspectionDTO.achsmanschetten = this.getValueSafely(roadVehicle.getriebe.list, 1);
  inspectionDTO.gelenkwelle = this.getValueSafely(roadVehicle.getriebe.list, 2);

  // Lenkung
  inspectionDTO.lenkungseinheit = this.getValueSafely(roadVehicle.lenkung.list, 0);

  // Bremsen spezifische Felder
  inspectionDTO.bremsanlage = this.getValueSafely(roadVehicle.bremsen.list, 0);
  inspectionDTO.bremswirkung = this.getValueSafely(roadVehicle.bremsen.list, 1);
  inspectionDTO.bremsstarke = this.getValueSafely(roadVehicle.bremsen.list, 2);
  inspectionDTO.bcheibenbremsen = this.getValueSafely(roadVehicle.bremsen.list, 3);
  inspectionDTO.beitungen = this.getValueSafely(roadVehicle.bremsen.list, 4);
  inspectionDTO.schlauche_und_anschlusse = this.getValueSafely(roadVehicle.bremsen.list, 5);

  // Aufhängung und Bereifung
  inspectionDTO.profiltiefe_und_verschleissmuster = this.getValueSafely(roadVehicle.aufhaengung_reader_bereifung.list, 0);
  inspectionDTO.aufhangung = this.getValueSafely(roadVehicle.aufhaengung_reader_bereifung.list, 1);
  inspectionDTO.stossdampfer = this.getValueSafely(roadVehicle.aufhaengung_reader_bereifung.list, 2);
  inspectionDTO.kugelgelenke = this.getValueSafely(roadVehicle.aufhaengung_reader_bereifung.list, 3);
  inspectionDTO.reifendruck = this.getValueSafely(roadVehicle.aufhaengung_reader_bereifung.list, 4);

  // Elektrische Anlage
  inspectionDTO.anlasser = this.getValueSafely(roadVehicle.elektrische_anlage.list, 0);
  inspectionDTO.aussenleuchten = this.getValueSafely(roadVehicle.elektrische_anlage.list, 1);
  inspectionDTO.scheinwerfen_ausrichtung = this.getValueSafely(roadVehicle.elektrische_anlage.list, 2);
  inspectionDTO.kofferraumbeleuchtung = this.getValueSafely(roadVehicle.elektrische_anlage.list, 3);
  inspectionDTO.hupe = this.getValueSafely(roadVehicle.elektrische_anlage.list, 4);

  // Innenraum
  inspectionDTO.kombifilter = this.getValueSafely(roadVehicle.innenraum.list, 0);

  // Aussenseite
  inspectionDTO.windschutzscheibe = this.getValueSafely(roadVehicle.aussenseite.list, 0);
  inspectionDTO.wischer_und_waschanlage = this.getValueSafely(roadVehicle.aussenseite.list, 1);
  inspectionDTO.wischblatter = this.getValueSafely(roadVehicle.aussenseite.list, 2);
  inspectionDTO.fahrzeugboden = this.getValueSafely(roadVehicle.aussenseite.list, 3);

  // Optische Prüfpunkte
  inspectionDTO.stossstange_vorne = this.getValueSafely(roadVehicle.opticalCheckpoints, 0);
  inspectionDTO.motorhaube = this.getValueSafely(roadVehicle.opticalCheckpoints, 1);
  inspectionDTO.linker_kotflugel_vorne = this.getValueSafely(roadVehicle.opticalCheckpoints, 2);
  inspectionDTO.rechter_kotflugel_vorne = this.getValueSafely(roadVehicle.opticalCheckpoints, 3);
  inspectionDTO.linke_tuer_vorne = this.getValueSafely(roadVehicle.opticalCheckpoints, 4);
  inspectionDTO.rechte_tuer_vorne = this.getValueSafely(roadVehicle.opticalCheckpoints, 5);
  inspectionDTO.dach = this.getValueSafely(roadVehicle.opticalCheckpoints, 6);
  inspectionDTO.linke_tuer_hinten = this.getValueSafely(roadVehicle.opticalCheckpoints, 7);
  inspectionDTO.rechte_tuer_hinten = this.getValueSafely(roadVehicle.opticalCheckpoints, 8);
  inspectionDTO.linker_kotflugel_hinten = this.getValueSafely(roadVehicle.opticalCheckpoints, 9);
  inspectionDTO.rechter_kotflugel_hinten = this.getValueSafely(roadVehicle.opticalCheckpoints, 10);
  inspectionDTO.heckklappe = this.getValueSafely(roadVehicle.opticalCheckpoints, 11);
  inspectionDTO.stossstange_hinten = this.getValueSafely(roadVehicle.opticalCheckpoints, 12);

  return inspectionDTO;
}

// Ergänzt: mapInspectionDTOToRoadVehicle Methode

private getValueSafely(list: any[], index: number): string {
  return list && list.length > index && list[index] && list[index].value !== undefined ? list[index].value.toString() : '';
}

mapInspectionDTOToRoadVehicle(inspectionDTO: InspectionDTO): RoadVehicle {
  const roadVehicle = new RoadVehicle();

  roadVehicle.manufacturer = inspectionDTO.manufacturer || '';
  roadVehicle.model = inspectionDTO.model || '';
  roadVehicle.constructionYear = inspectionDTO.construction_year || 0;
  roadVehicle.licensePlate = inspectionDTO.license_plate || '';
  roadVehicle.chassisNumber = inspectionDTO.chassis_number || '';
  roadVehicle.mileage = inspectionDTO.mileage || 0;
  roadVehicle.thumbnail = inspectionDTO.thumbnail;
  roadVehicle.inspectionPhotos = inspectionDTO.inspectionPhotos;

  // Motor spezifische Felder
  this.setValueSafely(roadVehicle.motor.list, 0, inspectionDTO.selektive_katalytische_reduktion_scr);
  this.setValueSafely(roadVehicle.motor.list, 1, inspectionDTO.motor_ol);
  this.setValueSafely(roadVehicle.motor.list, 2, inspectionDTO.olfilter);
  this.setValueSafely(roadVehicle.motor.list, 3, inspectionDTO.kuhlsystem);
  this.setValueSafely(roadVehicle.motor.list, 4, inspectionDTO.kraftstofffilter);
  this.setValueSafely(roadVehicle.motor.list, 5, inspectionDTO.luftfilter);

  // Getriebe spezifische Felder
  this.setValueSafely(roadVehicle.getriebe.list, 0, inspectionDTO.getriebe);
  this.setValueSafely(roadVehicle.getriebe.list, 1, inspectionDTO.achsmanschetten);
  this.setValueSafely(roadVehicle.getriebe.list, 2, inspectionDTO.gelenkwelle);

  // Lenkung
  this.setValueSafely(roadVehicle.lenkung.list, 0, inspectionDTO.lenkungseinheit);

  // Bremsen spezifische Felder
  this.setValueSafely(roadVehicle.bremsen.list, 0, inspectionDTO.bremsanlage);
  this.setValueSafely(roadVehicle.bremsen.list, 1, inspectionDTO.bremswirkung);
  this.setValueSafely(roadVehicle.bremsen.list, 2, inspectionDTO.bremsstarke);
  this.setValueSafely(roadVehicle.bremsen.list, 3, inspectionDTO.bcheibenbremsen);
  this.setValueSafely(roadVehicle.bremsen.list, 4, inspectionDTO.beitungen);
  this.setValueSafely(roadVehicle.bremsen.list, 5, inspectionDTO.schlauche_und_anschlusse);

  // Aufhängung und Bereifung
  this.setValueSafely(roadVehicle.aufhaengung_reader_bereifung.list, 0, inspectionDTO.profiltiefe_und_verschleissmuster);
  this.setValueSafely(roadVehicle.aufhaengung_reader_bereifung.list, 1, inspectionDTO.aufhangung);
  this.setValueSafely(roadVehicle.aufhaengung_reader_bereifung.list, 2, inspectionDTO.stossdampfer);
  this.setValueSafely(roadVehicle.aufhaengung_reader_bereifung.list, 3, inspectionDTO.kugelgelenke);
  this.setValueSafely(roadVehicle.aufhaengung_reader_bereifung.list, 4, inspectionDTO.reifendruck);

  // Elektrische Anlage
  this.setValueSafely(roadVehicle.elektrische_anlage.list, 0, inspectionDTO.anlasser);
  this.setValueSafely(roadVehicle.elektrische_anlage.list, 1, inspectionDTO.aussenleuchten);
  this.setValueSafely(roadVehicle.elektrische_anlage.list, 2, inspectionDTO.scheinwerfen_ausrichtung);
  this.setValueSafely(roadVehicle.elektrische_anlage.list, 3, inspectionDTO.kofferraumbeleuchtung);
  this.setValueSafely(roadVehicle.elektrische_anlage.list, 4, inspectionDTO.hupe);

  // Innenraum
  this.setValueSafely(roadVehicle.innenraum.list, 0, inspectionDTO.kombifilter);

  // Aussenseite
  this.setValueSafely(roadVehicle.aussenseite.list, 0, inspectionDTO.windschutzscheibe);
  this.setValueSafely(roadVehicle.aussenseite.list, 1, inspectionDTO.wischer_und_waschanlage);
  this.setValueSafely(roadVehicle.aussenseite.list, 2, inspectionDTO.wischblatter);
  this.setValueSafely(roadVehicle.aussenseite.list, 3, inspectionDTO.fahrzeugboden);

  // Optische Prüfpunkte
  this.setValueSafely(roadVehicle.opticalCheckpoints, 0, inspectionDTO.stossstange_vorne);
  this.setValueSafely(roadVehicle.opticalCheckpoints, 1, inspectionDTO.motorhaube);
  this.setValueSafely(roadVehicle.opticalCheckpoints, 2, inspectionDTO.linker_kotflugel_vorne);
  this.setValueSafely(roadVehicle.opticalCheckpoints, 3, inspectionDTO.rechter_kotflugel_vorne);
  this.setValueSafely(roadVehicle.opticalCheckpoints, 4, inspectionDTO.linke_tuer_vorne);
  this.setValueSafely(roadVehicle.opticalCheckpoints, 5, inspectionDTO.rechte_tuer_vorne);
  this.setValueSafely(roadVehicle.opticalCheckpoints, 6, inspectionDTO.dach);
  this.setValueSafely(roadVehicle.opticalCheckpoints, 7, inspectionDTO.linke_tuer_hinten);
  this.setValueSafely(roadVehicle.opticalCheckpoints, 8, inspectionDTO.rechte_tuer_hinten);
  this.setValueSafely(roadVehicle.opticalCheckpoints, 9, inspectionDTO.linker_kotflugel_hinten);
  this.setValueSafely(roadVehicle.opticalCheckpoints, 10, inspectionDTO.rechter_kotflugel_hinten);
  this.setValueSafely(roadVehicle.opticalCheckpoints, 11, inspectionDTO.heckklappe);
  this.setValueSafely(roadVehicle.opticalCheckpoints, 12, inspectionDTO.stossstange_hinten);

  return roadVehicle;
}

private setValueSafely(list: any[], index: number, value: string): void {
  if (!list || index < 0 || index >= list.length || !list[index]) {
      console.warn(`Unable to set value for index ${index}`);
      return;
  }
  list[index] = value;
}
}
