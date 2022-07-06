import {makeAutoObservable} from "mobx";
import {OrderModel} from "../../models/response/order.model";

export class OrderStore {

    orders: OrderModel[] = []

    constructor() {
        makeAutoObservable(this)
    }

    setOrders (orders: OrderModel[]) {
        this.orders = orders
    }
}