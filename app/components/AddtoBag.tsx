"use client"

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { Urlfor } from "../lib/sanity";

export interface ProductCart{
    name:string;
    description:string;
    price:number;
    currency:string;
    image:any;
    id:string;
}
export function AddToBag({name,description,price,currency,image,id}:ProductCart){
    const {addItem,handleCartClick} = useShoppingCart();
    const product = {
        name,
        description,
        price,
        currency,
        image:Urlfor(image).url(),
        id,
    }
    return <Button onClick={()=>{
        addItem(product),handleCartClick()
    }}>Add To Cart</Button>
}