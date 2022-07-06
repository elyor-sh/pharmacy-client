import React from "react";
import {AuthService} from "./service/auth.service";
import {CurrentUserStore} from "./allStores/currentUser.store";
import {OrderStore} from "./allStores/order.store";
import {OrderService} from "./service/order.service";
import {MedicineStore} from "./allStores/medicine.store";
import {MedicineService} from "./service/medicine.service";

// STORES
const currentUserStore = new CurrentUserStore()
const orderStore = new OrderStore()
const medicineStore = new MedicineStore()

// SERVICES
const authService = new AuthService(currentUserStore)
const orderService = new OrderService(orderStore)
const medicineService = new MedicineService(medicineStore)

export const StoresContext = React.createContext({
    currentUserStore,
    authService,
    orderStore,
    orderService,
    medicineStore,
    medicineService
});

export const useStores = () => React.useContext(StoresContext);