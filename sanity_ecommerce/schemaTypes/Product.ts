import { defineField } from "sanity";

export default {
    name:"Product",
    type:"document",
    title:"Product",
    fields:[
        defineField({
            name:"name",
            type:"string",
            title:"Name of Product",
        }),
        defineField({
            name:"images",
            type:"array",
            title:"Product images",
            of:[{type:"image"}]
        }),
        defineField({
            name:"description",
            type:"string",
            title:"Description of Product",
        }),
        defineField({
            name:"slug",
            type:"slug",
            title:"product slug",
            options:{
                source:"name"
            }
        }),
        defineField({
            name:"price",
            title:"Price",
            type:"number",
        }),
        defineField({
            name:"category",
            title:"product category",
            type: "reference",
            to: [
                {
                    type: "category"
                }
            ]
        })
    ]
}