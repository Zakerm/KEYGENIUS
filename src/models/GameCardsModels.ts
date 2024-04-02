export interface IGameCards{
    id: number
    image: string
    title?:string
    platform: string
    price: number
    currency: string
    region?: string
    language?: string
    availability?: string
    description?: string
}