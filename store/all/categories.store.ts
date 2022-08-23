import {makeAutoObservable} from "mobx";
import {CategoriesModel} from "../../models/response/categories.model";

export class CategoriesStore {

    categories: CategoriesModel[] = []
    loading: boolean = false
    openAutoComplete: boolean = false

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true})
    }

    setCategories (categories: CategoriesModel[]) {
        this.categories = categories
    }

    setOpenAutoComplete (p: boolean) {
        this.openAutoComplete = p
    }

    setLoading (p: boolean) {
        this.loading = p
    }
}