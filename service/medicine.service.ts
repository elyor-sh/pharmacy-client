import {MedicineRequestModel} from "../models/request/medicine.request";
import {apiGetMedicine, apiGetMedicinesByCategoryId} from "../api";
import {medicineStore} from "../store";

class MedicineService {

    async getAll () {
        try {

            const response = await apiGetMedicine()

            medicineStore.setMedicines(response.data.items)

            return Promise.resolve(response)

        }catch (e) {
            return Promise.reject(e)
        }
    }

    async getByCategoryIds (ids: MedicineRequestModel.getMedicinesByCategoryIds) {
        try {

            const response = await apiGetMedicinesByCategoryId(ids)

            medicineStore.setMedicines(response.data.items)

            return Promise.resolve(response)

        }catch (e) {
            return Promise.reject(e)
        }
    }
}

export const medicineService = new MedicineService()