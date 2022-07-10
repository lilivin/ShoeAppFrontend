export interface ShoesState {
    shoes: SingleShoes[]
}

export interface SingleShoes {
    id?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    size: number,
    site: string,
    product_code: number,
    owner_id: string,
    requester_id: string | null
}