import {pharmApiInstance, pharmApiInstanceAuth} from "./axios";
import {LoginRequestModel} from "../models/request/login.request";
import {AxiosResponseType} from "./types";
import {CurrentUserModel} from "../models/response/current-user.model";
import {OrderModel} from "../models/response/order.model";
import {OrderRequestModel} from "../models/request/order.request";
import {MedicineModel} from "../models/response/medicine.model";

// =====================-----  AUTH  ----==========================

// Login
export const apiLogin =
    (
        params: LoginRequestModel
    ): AxiosResponseType<CurrentUserModel> =>  pharmApiInstanceAuth.post('/login', params)

// =====================-----  ORDER  ----==========================

// Создание заказа
export const apiPostOrder =
    (
        params: OrderRequestModel.post[]
    ): AxiosResponseType<OrderModel> =>  pharmApiInstance.post('/order', params)


// =====================-----  MEDICINE  ----==========================

// Получение препаратов
export const apiGetMedicine = (): AxiosResponseType<MedicineModel[]> =>  pharmApiInstance.get('/medicines')