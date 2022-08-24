import {MedicineStore} from "./all/medicine.store";
import {CategoriesStore} from "./all/categories.store";

export const categoriesStore = new CategoriesStore()
export const medicineStore = new MedicineStore()

export const createStore = () => ({
    categoriesStore,
    medicineStore
});

export type TStore = ReturnType<typeof createStore>