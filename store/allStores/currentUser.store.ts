import {CurrentUserModel} from "../../models/response/current-user.model";
import {makeAutoObservable} from "mobx";

export class CurrentUserStore {

    token: string | null = null
    currentUser: CurrentUserModel | null = JSON.parse(localStorage.getItem('currentUser') || '[]')
        ?
        JSON.parse(localStorage.getItem('currentUser') || '[]')
        :
        null

    constructor() {
        makeAutoObservable(this)
    }

    setLocalStorage(user: CurrentUserModel) {
        localStorage.setItem('currentUser', JSON.stringify(user))
        localStorage.setItem('token', user.token)
    }

    setData (user: CurrentUserModel) {
        this.currentUser = user
        this.token = user.token
    }
}