export interface MedicineModel {
    id: number
    name: string
    description: string
    image: string
    imageId: string
    resourceType: string
    totalCount: number
    hasDiscount: boolean
    priceWithDiscount: number
    currency: "UZS"
    categoryId: number
    createdAt: string
    updatedAt: string
}