
import Image from "next/image";
import { Client, Urlfor } from "../lib/sanity"
import Link from "next/link";

export default async function Hero(){
   const data = await getData();
   const links = [
    {name:"Home",href:"/"},

    {name:"Men",href:"/men"},
    {name:"Women",href:"/women"},
    {name:"teens",href:"/teen"},

]
    return(
        <section className=" mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
            <div className="mb-8 flex flex-wrap justify-between md:mb-16">
                <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
                    <h1 className=" mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-0 md:text-6xl ">
                        Top Fashion For a Top Prices!
                    </h1>
                    <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
                    We Sell Only the most Exclusive and high quality products for you
                    We are the best to Come and shop with us
                </p>
                </div>
                <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
                    <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
                    <Image src={Urlfor(data.image1).url()} alt="hero Image"
                    className=" h-full w-full object-cover object-center"
                    priority
                   height={500}
                   width={500}/>
                    </div>
                    <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg" >
                    <Image src={Urlfor(data.image2).url()} alt="hero Image2" className="h-full w-full object-cover object-center" width={500} height={500} priority />
                </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                    <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
                        {links.map((link,i)=>(
                            <Link href={link.href} key={i} className=" flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">
                                {link.name}
                            </Link>
                        ))}
                        
                    </div>
                </div>
                
                
            </div>
        </section>
    )
}

async function getData(){
    const query = `*[_type=="HeroImage"][0]`
    const data = await Client.fetch(query);
    return data;
}