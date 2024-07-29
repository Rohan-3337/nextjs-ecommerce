"use client"
import Image from "next/image";
import { Urlfor } from "../lib/sanity";
import { useState } from "react";

interface ImageProps{
    images:any;
}

export default function ImageGallery({images}:ImageProps){
    const [bigImage, setBigImage] = useState(images[0])
    const handleImage = (image:any) =>{
        setBigImage(image);
    }
    return(
        <div className=" grid gap-4 lg:grid-cols-5">
            <div className="order-last flex gap-4 lg:order-none lg:flex-col">
                {
                    images.map((image:any,idx:any)=>(
                        <div className="overflow-hidden rounded-lg bg-gray-100" key={idx} onClick={()=>handleImage(image)}>
                            <Image src={Urlfor(image).url()} width={200} height={200} alt="Photo" className=" h-full w-full object-cover object-center cursor-pointer"/>
                        </div>
                    )) 
                }
            </div>
            <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
            <Image src={Urlfor(bigImage).url()} width={500} height={500} alt="Photo" className=" h-full w-full object-cover object-center cursor-pointer"/>

            <span className="absolute top-0 left-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                sale
            </span>
            </div>
        </div>
    )
}