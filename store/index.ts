import {MedicineStore} from "./all/medicine.store";

const medicineStore = new MedicineStore()

export const createStore = () => ({
    medicineStore
});

export type TStore = ReturnType<typeof createStore>