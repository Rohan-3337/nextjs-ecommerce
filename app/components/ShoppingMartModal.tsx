"use client"
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";


export default function ShoppingMartModal(){
    const {cartCount,shouldDisplayCart,handleCartClick,cartDetails,removeItem,totalPrice} = useShoppingCart();
    
    return (
       <Sheet open={shouldDisplayCart} onOpenChange={()=>handleCartClick()}>
        <SheetContent className="sm:max-w-lg w-[90vw]">
            <SheetHeader>
                <SheetTitle>Shopping Cart</SheetTitle>
            </SheetHeader>
            <div className="h-full flex flex-col justify-between">
                <div className="mt-8 flex-1 overflow-y-auto">
                    <ul className="-my-6 divide-y divide-gray-200">
                        {cartCount===0 ?(
                            <h1 className="py-6">You dont have any item</h1>
                        ):(
                            <>
                           {Object.values(cartDetails ?? {}).map((product) => (
                                        <li key={product.id} className="flex py-6">
                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                <Image src={product.image as string} alt={product.name} width={100} height={100}/>
                                            </div>
                                            <div className="ml-4 flex flex-1 flex-col">
                                                <div>
                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                        {product.name}
                                                        <div className="ml-4">{product.price}</div>
                                                    </div>
                                                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.description}</p>
                                                </div>
                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                     <div className="text-gray-500">QTY:{product.quantity}</div>
                                                     <div className="flex">
                                                        <button type="button" className="font-medium text-primary hover:text-primary/80"
                                                        onClick={()=>removeItem(product.id)}>
                                                        Remove
                                                        </button>
                                                     </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                            </>
                        )}
                    </ul>
                </div>
                <div className="border-t border border-gray-200 px-4 py-6 shadow-md sm:px-6 ">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>${totalPrice}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                            Shipping and taxes are calculated at CheckOut
                        </p>
                        <div className="mt-6">
                            <Button className="w-full">CheckOut</Button>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                <p>
                                    OR{" "} 
                                    <button onClick={()=>handleCartClick()} className=" font-medium text-primary hover:text-primary/80">
                                        Continue shopping
                                    </button>
                                </p>
                        </div>
                </div>
            </div>
        </SheetContent>
       </Sheet> 
    )
}