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
    bgImage?: any
    filter?: {
        mode?: string[],
        genre?: string[]
        release?: number
        rating?:number
    }
    sliderImg?: string[],
    trailer?: string,
    characteristics: {
        os?: string
        cpu?: string
        ram?: string
        videocard?: string
        DirectX?: string
    }
    
}