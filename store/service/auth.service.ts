import {makeAutoObservable, runInAction} from "mobx";
import {apiLogin} from "../../api";
import {LoginRequestModel} from "../../models/request/login.request";
import {CurrentUserStore} from "../allStores/currentUser.store";

export class AuthService {

    constructor(private readonly currentUserStore: CurrentUserStore) {
        makeAutoObservable(this)
    }

    async login(data: LoginRequestModel) {

        const response = await apiLogin(data)

        runInAction(() => {
            this.currentUserStore.setLocalStorage(response.data)
            this.currentUserStore.setData(response.data)
        })

    }
}