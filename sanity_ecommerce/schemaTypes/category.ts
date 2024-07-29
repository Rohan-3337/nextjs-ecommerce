import { defineField } from "sanity";

export default {
    name:"category",
    type:"document",
    title:"Categories",
    fields:[
        defineField({
            name:"Category",
            type:"string",
            title:"Name of Category",
        }),
        
    ]
}