import {makeAutoObservable, runInAction} from "mobx";
import {MedicineStore} from "../allStores/medicine.store";
import {apiGetMedicine} from "../../api";

export class MedicineService {

    constructor(private readonly medicineStore: MedicineStore) {
        makeAutoObservable(this)
    }

    async getMedicines () {

        const response = await apiGetMedicine()

        runInAction(() => {
            this.medicineStore.setMedicines(response.data.items)
        })
    }

}