export interface SimplifiedProduct{
    _id: string;
    
    name:string;
    price:number;
    slug: string;
    categoryName: string;
    imageUrl: string;
}


export interface fullProduct{
    _id: string;
    description:string;
    name:string;
    price:number;
    slug: string;
    categoryName: string;
    images: any;
}