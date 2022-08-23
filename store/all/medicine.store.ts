import {makeAutoObservable} from "mobx";
import {MedicineModel} from '../../models/response/medicine.model'

export class MedicineStore {

    medicines: MedicineModel[] = []

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true})
    }

    setMedicines (data: MedicineModel[]) {
        this.medicines = data
    }
}