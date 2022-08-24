import {makeAutoObservable} from "mobx";
import {MedicineModel} from '../../models/response/medicine.model'
import {CategoriesModel} from "../../models/response/categories.model";

export class MedicineStore {

    medicines: MedicineModel[] = []
    selectedCategories: number[] = []

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true})
    }

    setMedicines (data: MedicineModel[]) {
        this.medicines = data
    }

    setSelectedCategories (data: CategoriesModel[]) {
        this.selectedCategories = data.map(item => item.id)
    }
}