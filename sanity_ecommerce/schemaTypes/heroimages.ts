import { defineField } from "sanity";

export default {
    name:"HeroImage",
    type:"document",
    title:"Two Hero Images",
    fields:[
        defineField({
            name:"image1",
            type:"image",
            title:"first Image",
        }),
        defineField({
            name:"image2",
            type:"image",
            title:"second Image",
        }),
         
    ]
}