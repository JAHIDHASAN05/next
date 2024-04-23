'use server'

import { blogs } from "@/types"
import { json } from "stream/consumers"

export const createBlog=async (blog:blogs)=>{
    const res= await fetch(`http://localhost:5000/blogs/`,{
        method:"POST",
        headers:{
            'content-type': "application/json"
        },
        body :JSON.stringify(blog),
        cache:'no-store'
    
    })
    const blogInfo= await res.json()
    return blogInfo
}