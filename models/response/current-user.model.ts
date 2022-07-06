import {RoleModel} from "./role.model";
import {OrderModel} from "./order.model";

export interface UserModel {
    id: number | string
    username: string
    email: string
    banned: boolean
    banReason: string | null
    roleId: number
    createdAt: string
    updatedAt: string
    roles: RoleModel
    orders: OrderModel[]
}

export interface CurrentUserModel {
    user: UserModel
    token: string
}

