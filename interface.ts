export interface Producto {
    timestamp: number,
    name: string,
    description: string,
    code: string,
    foto: string,
    price: number,
    stock: number,
    id?: number
}