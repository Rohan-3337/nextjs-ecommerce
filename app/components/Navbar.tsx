"use client"
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShoppingCart } from "use-shopping-cart";


export default function Navbar(){
    const links = [
        {name:"Home",href:"/"},

        {name:"Men",href:"/men"},
        {name:"Women",href:"/women"},
        {name:"teens",href:"/teen"},

    ]
    const pathname = usePathname();
    const {handleCartClick} = useShoppingCart();
    return (
        <header className="p-4 border-b shadow-md">
            <div className="flex justify-between items-center mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
                    <Link href={"/"}>
                    <h1 className=" text-2xl md:text-4xl font-bold">Next<span className=" text-primary">Commerce</span></h1>
                    </Link>

                    <nav className=" hidden gap-12 lg:flex 2xl:ml-16">
                            {links.map((link, i) =>(
                                <ul className="" key={i}>
                                     {pathname === link.href ?(
                                        <Link className=" text-lg font-semibold text-primary transition" href={link.href} key={i}>
                                            {link.name}
                                        </Link>
                                     ):(
                                        <Link className=" text-lg font-semibold text-gray-600 transition duration-200 hover:text-primary" href={link.href}>
                                        {link.name}
                                    </Link>
                                     )}
                                </ul>
                            ))}
                    </nav>
                    <div className="flex divide-x">
                                <Button variant={"ghost"} className=" flex flex-col justify-between" onClick={()=>handleCartClick()}>

                                <ShoppingBag className=" h-6 w-6"/>
                                {/* <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                                    Cart
                                </span> */}
                                </Button>
                            
                    </div>
            </div>

        </header>
    )
}