import { OpticalCheckpoint } from "src/opticalCheckpoint";
import { VehicleProperty } from "src/vehicleProperty"

export class RoadVehicle{

    manufacturer = "";
    model = "";
    constructionYear = null;
    licensePlate = "";
    chassisNumber = "";
    mileage = 0;
    inspactionDate: Date;
    thumbnail = "";

    public motor: VehicleProperty= {
        name : "Motor",
        list : [
        {name:'Selektive katalytische Reduktion (SCR)', value:""},
        {name:'Motoröl ', value:""},
        {name:'Ölfilter ', value:""},
        {name:'Kühlsystem', value:""},
        {name:'Kraftstofffilter ', value:""},
        {name:'Luftfilter ', value:""}
        ]
    };

    public getriebe: VehicleProperty= {
        name : "Getriebe",
        list : [
        {name:'Getriebe ', value:""},
        {name:'Achsmanschetten', value:""},
        {name:'Gelenkwelle', value:""}
        ]
    };

    public lenkung: VehicleProperty= {
        name : "Lenkung",
        list : [
        {name:'Lenkungseinheit', value:""}
        ]
    };

    public bremsen: VehicleProperty= {
        name : "Bremsen",
        list : [
        {name:'Bremsflüßigkeit', value:""},
        {name:'Bremsanlage', value:""},
        {name:'Bremswirkung', value:""},
        {name:'Bremsstärke', value:""},
        {name:'Scheibenbremsen', value:""},
        {name:'Leitungen, Schläuche und Anschlüße' ,value:""},
        ]
    };

    public aufhaengung_reader_bereifung: VehicleProperty= {
        name : "Aufhängung, Räder, Bereifung",
        list : [
        {name: 'Profiltiefe und Verschleißmuster', value:""},
        {name: 'Aufhängung', value:""},
        {name: 'Stoßdämpfer', value:""},
        {name: 'Kugelgelenke', value:""},
        {name: 'Reifendruck', value:""}
        ]
    };

    public elektrische_anlage: VehicleProperty= {
        name : "Elektrische Anlage",
        list : [
        {name:'Anlasser', value:""},
        {name:'Außenleuchten', value:""},
        {name:'Scheinwerfen Ausrichtung', value:""},
        {name:'Kofferraumbeleuchtung', value:""},
        {name:'Hupe', value:""}
        ]
    };

    public innenraum: VehicleProperty= {
        name : "Innenraum",
        list : [
        {name:'Innenraum Zustand', value:""},
        {name:'Innenraumfilter', value:""},
        {name:'Kombifilter', value:""}
        ]
    };

    public aussenseite: VehicleProperty= {
        name : "Außenseite",
        list : [
        {name:'Windschutzscheibe', value:""},
        {name:'Wischer und Waschanlage', value:""},
        {name:'Wischblätter', value:""},
        {name:'Fahrzeugboden', value:""}
        ]
    };

    opticalCheckpoints: OpticalCheckpoint[]=[
        
        {name: "stossStangeVorne", value: ""},
        {name: "motorhaube", value: ""},
        {name: "linkerKotfluegelVorne", value: ""},
        {name: "rechterKotfluegelVorne", value: ""},
        {name: "linkeTuerVorne", value: ""},
        {name: "rechteTuerVorne", value: ""},
        {name: "dach", value: ""},
        {name: "linkeTuerHinten", value: ""},
        {name: "rechteTuerHinten", value: ""},
        {name: "linkerKotfluegelHinten", value: ""},
        {name: "rechterKotfluegelHinten", value: ""},
        {name: "heckklappe", value: ""},
        {name: "stossStangeHinten", value: ""}
    ]

    inspectionPhotos: string[] = null;

    
}
