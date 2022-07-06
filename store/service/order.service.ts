import {makeAutoObservable} from "mobx";
import {OrderStore} from "../allStores/order.store";

export class OrderService {


    constructor(private readonly orderStore: OrderStore) {
        makeAutoObservable(this)
    }

    async postOrders () {

    }
}