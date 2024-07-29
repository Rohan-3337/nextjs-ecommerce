
import { AddToBag } from "@/app/components/AddtoBag";
import ImageGallery from "@/app/components/ImageGallery";
import { fullProduct } from "@/app/interface";
import { Client } from "@/app/lib/sanity"
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";

async function getData(slug: string){
    const query = `*[_type == "Product" && slug.current=="${slug}"][0] {
  _id,
  name,
  price,
  "slug": slug.current,
  "categoryName": category->Category,
   images,
    description
}`
    const data = await Client.fetch(query);
    return data;
}
export default async function ProductPage({params}:{params:{slug:string}}){
    const data:fullProduct = await getData(params.slug);

    return(
        <h1 className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-4 md:px-8">
                <div className="grid gap-8 md:grid-cols-2">
                    <ImageGallery images={data.images}/>
                    <div className="md:py-8">
                    <div className="md:mb-3 mb-2">
                        <span className=" mb-0.5 inline-block text-gray-500">{data.categoryName}</span>
                        <h2 className=" text-2xl font-bold text-gray-800 lg:text-3xl">{data.name}</h2>
                    </div>
                    <div className="mb-6 flex items-center gap-3 md:mb-10">
                        <Button className=" rounded-full gap-x-3">
                            <span className="text-sm">4.2</span>
                            <Star className="w-5 h-5"/>
                        </Button>
                        <span className="text-sm text-gray-500 transition duration-200">
                            56 Rating
                        </span>
                    </div>
                    <div className="mb-4">
                        <div className="flex items-end gap-2">
                            <span className=" text-xl font-bold text-gray-800">${data.price}</span>
                            <span className="mb-0.5 text-red-500 line-through">${data.price +6000}</span>
                        </div>
                        <span className="text-sm text-gray-500">
                            Incl. Vat Plus Shipping
                        </span>
                    </div>
                    <div className="mb-6 flex items-center gap-2 text-gray-500">
                        <Truck className=" w-6 h-6"/>
                        <p>2-4 Day Shipping</p>
                    </div>
                    <div className="flex gap-2.5">
                        <AddToBag id={data._id} name={data.name} price={data.price} description={data.description} currency="USD" image={data.images[0]}/>
                        <Button variant={"secondary"}>CheckOut Now</Button>
                    </div>
                    <p className="mt-12 text-base text-gray-500 tracking-wider break-words whitespace-normal">{data.description}</p>
                </div>
                </div>
                
            </div>
        </h1>
    )
}