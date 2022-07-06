export interface BasketModel {
    id: number
    medicineId: number
    count: number
    price: number
    orderId: number
    createdAt: string
    updatedAt: string
}

export interface OrderModel {
    id: number
    userId: number
    status: string
    totalPrice: number
    createdAt: string
    updatedAt: string
    baskets: BasketModel[]
}