import {makeAutoObservable} from "mobx";
import {MedicineModel} from "../../models/response/medicine.model";

export class MedicineStore {

    medicines: MedicineModel[] = []

    constructor() {
        makeAutoObservable(this)
    }

    setMedicines (medicines: MedicineModel[]) {
        this.medicines = medicines
    }

}