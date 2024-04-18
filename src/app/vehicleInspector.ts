import { InspectionDTO } from "./inspectionDTO";

export class VehicleInspector {

    static checkVehicleStatus(inspection: InspectionDTO): string {
        let category = "Fahrtüchtig";

        if (this.hasCriticalIssues(inspection)) {
            category = "Nicht fahrtüchtig";
        } else if (this.hasRepairableIssues(inspection)) {
            category = "Reparaturbedürftig";
        }

        return category;
    }

    private static hasCriticalIssues(inspection: InspectionDTO): boolean {
        return (
            inspection.bremsanlage === "n.i.O" ||
            inspection.bremswirkung === "n.i.O" ||
            inspection.lenkungseinheit === "n.i.O" ||
            inspection.aussenleuchten === "n.i.O" ||
            inspection.scheinwerfen_ausrichtung === "n.i.O" ||
            inspection.kuhlsystem === "n.i.O" ||
            inspection.windschutzscheibe === "n.i.O" ||
            inspection.wischblatter === "n.i.O" ||
            inspection.fahrzeugboden === "n.i.O"
        );
    }

    private static hasRepairableIssues(inspection: InspectionDTO): boolean {
        return (
            inspection.motor_ol === "n.i.O" ||
            inspection.kuhlsystem === "n.i.O" ||
            inspection.bcheibenbremsen === "n.i.O" ||
            inspection.profiltiefe_und_verschleissmuster === "n.i.O" ||
            inspection.windschutzscheibe === "n.i.O" ||
            inspection.wischer_und_waschanlage === "n.i.O"
        );
    }
}