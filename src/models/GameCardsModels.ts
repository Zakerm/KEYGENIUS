export interface IGameCards{
    [x: string]: any
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
    filter?: {
        mode?: string[],
        genre?: string[]
        release?: number
        rating?:number
    }
    
}