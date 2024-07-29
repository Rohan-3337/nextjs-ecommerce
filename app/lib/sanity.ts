import  ImageUrlBuilder  from "@sanity/image-url";
import { createClient } from "next-sanity";


export const Client = createClient({
    projectId:"8pegl6wf",
    apiVersion:"v2022-03-07",
    dataset:"production",
    useCdn:true,
})

export const Builder = ImageUrlBuilder(Client);

export function Urlfor(source:any){
    return Builder.image(source);
}